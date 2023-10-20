import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable, from, map } from 'rxjs';
function generateTimestampHash() {
  const currentDate = new Date();
  const milliseconds = currentDate.getTime().toString();
  const hash = hashCode(milliseconds);
  return hash;
}

function hashCode(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h.toString(16);
}

const DB_USERS = 'myuserdb88';

export interface User {
  id: number;
  name: string;
  active: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private user: WritableSignal<User[]> = signal(<User[]>[]);

  public series = new Subject<any>();
  public peliculas = new Subject<any>();
  public usuario = new Subject<any>();

  constructor() {}

  async initializPligin() {
    try {
      this.db = await this.sqlite.createConnection(
        DB_USERS,
        false,
        'no-encryption',
        1,
        false
      );
      await this.db.open();
      const schema = `CREATE TABLE IF NOT EXISTS Usuarios (
        id INTEGER PRIMARY KEY NOT NULL,
        rol TEXT NOT NULL,
        password TEXT NOT NULL,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        desc TEXT ,
        idDatos TEXT NOT NULL,
        apellidoPaterno TEXT NOT NULL,
        apellidoMaterno TEXT NOT NULL,
        EDAD INTEGER NOT NULL,
        SeriesFavoritas TEXT ,
        PeliculasFavoritas TEXT,
        imagen TEXT
        );`;
      const schema2 = `CREATE TABLE IF NOT EXISTS DatosUsuarios (
        id INTEGER PRIMARY KEY NOT NULL,
        IdDatos TEXT NOT NULL,
        SeriesFavoritas TEXT NOT NULL,
        PeliculasFavoritas TEXT NOT NULL,
        Comentarios TEXT NOT NULL
        );`;
      const schema3 = `CREATE TABLE IF NOT EXISTS Series (
          id INTEGER PRIMARY KEY NOT NULL,
          nombre TEXT NOT NULL,
          adulto INTEGER NOT NULL,
          calificacion REAL NOT NULL,
          fechaLanzamiento TEXT NOT NULL,
          nCapitulos INTEGER NOT NULL,
          descripcion TEXT NOT NULL,
          imagen TEXT

        )`;
      const schema4 = `CREATE TABLE IF NOT EXISTS Peliculas (
          id INTEGER PRIMARY KEY NOT NULL,
          nombre TEXT NOT NULL,
          adulto INTEGER NOT NULL,
          calificacion REAL NOT NULL,
          fechaLanzamiento TEXT NOT NULL,
          duracion INTEGER NOT NULL,
          descripcion TEXT NOT NULL,
          imagen TEXT

        )`;
      const user1 = `INSERT INTO Usuarios (rol, password, idDatos, apellidoPaterno, apellidoMaterno, EDAD, email, nombre) VALUES ('admin', 'admin', '1', 'admin', 'admin', '1', 'admin@admin', 'admin')`;
      // await this.db.execute(`DROP TABLE IF EXISTS Usuarios`);
      await this.db.execute(schema);

      // await this.db.execute(user1);
      await this.db.execute(schema2);
      await this.db.execute(schema3);
      await this.db.execute(schema4);

      console.log('Database initialized');
      this.loadUsers();

      return true;
    } catch (error) {
      console.log('Error initializing database', error);
      return false;
    }
  }
  public getSeries() {
    const series = new Observable((observer) => {
      this.db.query('SELECT * FROM Series').then((res) => {
        observer.next(res.values);
        observer.complete();
      });
    });
    return series;
  }
  public getPeliculas() {
    const series = new Observable((observer) => {
      this.db.query('SELECT * FROM Peliculas').then((res) => {
        observer.next(res.values);
        observer.complete();
      });
    });
    return series;
  }
  async crearPelicula(
    nombre: string,
    adulto: number,
    calificacion: number,
    fechaLanzamiento: string,
    duracion: number,
    descripcion: string,
    foto: string
  ) {
    try {
      const query = `INSERT INTO Peliculas (nombre, adulto, calificacion, fechaLanzamiento, duracion, descripcion, imagen) VALUES ('${nombre}', '${adulto}', '${calificacion}', '${fechaLanzamiento}', '${duracion}', '${descripcion}', '${foto}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM Peliculas`;
      const result2 = await this.db.query(query2);
      this.peliculas.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  async crearSerie(
    nombre: string,
    adulto: number,
    calificacion: number,
    fechaLanzamiento: string,
    nCapitulos: number,
    descripcion: string,
    foto: string
  ) {
    try {
      const query = `INSERT INTO Series (nombre, adulto, calificacion, fechaLanzamiento, nCapitulos, descripcion, imagen) VALUES ('${nombre}', ${adulto}, ${calificacion}, '${fechaLanzamiento}', ${nCapitulos}, '${descripcion}', '${foto}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM Series`;
      const result2 = await this.db.query(query2);

      this.series.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  async GetSeries() {
    try {
      const query = `SELECT * FROM Series`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  async GetPeliculas() {
    try {
      const query = `SELECT * FROM Peliculas`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }

  // CRUD
  async EditarUsuario(nombre: string, email: string, apellidoPaterno: string) {
    try {
      const query = `UPDATE Usuarios SET    apellidoPaterno=${apellidoPaterno},  email=${email} nombre=${nombre} WHERE email='${email}'`;

      const result = await this.db.execute(query);
      this.loadUsers();

      return true;
    } catch (error) {
      return error;
    }
  }
  async LoginUsuario(email: string, password: string) {
    try {
      const query = `SELECT * FROM Usuarios WHERE email='${email}' AND password='${password}'`;

      const result = await this.db.query(query);

      console.log(result.values);
      // console.log(result);

      return result.values;
    } catch (error) {
      return error;
    }
  }
  async EliminarUsuario(id: number) {
    try {
      const query = `DELETE FROM Usuarios WHERE id=${id}`;

      const result = await this.db.execute(query);
      this.loadUsers();

      return true;
    } catch (error) {
      return error;
    }
  }
  async AgregarUsuario(
    rol: string,
    password: string,
    idDatos: number,
    apellidoPaterno: string,
    apellidoMaterno: string,
    EDAD: number,
    nombre: string,
    email: string
  ) {
    console.log(
      rol,
      password,
      idDatos,
      apellidoPaterno,
      apellidoMaterno,
      EDAD,
      nombre,
      email,
      'aquitamosDB'
    );
    try {
      const timestampHash = generateTimestampHash();
      console.log(timestampHash);
      const datos = [];
      const query = `INSERT INTO Usuarios (rol, password, idDatos, apellidoPaterno, apellidoMaterno, EDAD, email, nombre) VALUES ('${rol}', '${password}', '${timestampHash}', '${apellidoPaterno}', '${apellidoMaterno}', '${EDAD}', '${email}', '${nombre}')`;
      const query2 = `INSERT INTO DatosUsuarios (IdDatos, SeriesFavoritas, PeliculasFavoritas, Comentarios) VALUES ('${timestampHash}', '', '', '')`;
      datos.push(this.db.query(query));
      datos.push(this.db.query(query2));

      const final = await Promise.all(datos);
      if (final) {
        this.loadUsers();

        return timestampHash;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
  async getUsuarios(): Promise<any[]> {
    const query = 'SELECT * FROM Usuarios';
    const result = await this.db.query(query);
    return result.values;
  }
  queryRecords(): Observable<any[]> {
    const querySQL = 'SELECT * FROM Usuarios';
    return from(this.db.query(querySQL, [])).pipe(
      map((data) => {
        let records = [];
        console.log(data);
        // for (let i = 0; i < (data as any).rows.length; i++) {
        //   records.push((data as any).rows.item(i));
        // }
        return records;
      })
    );
  }

  async loadUsers() {
    const query = 'SELECT * FROM Usuarios';
    const quey2 = 'SELECT * FROM DatosUsuarios';
    const result2 = await this.db.query(quey2);
    const result = await this.db.query(query);
    console.log(result.values, 'aqui');
    console.log(JSON.stringify(result2.values));
    this.user.set(result.values || []);
  }
  async addUser(name: string) {
    const query = `INSERT INTO users (name) VALUES ('${name}')`;
    const result = await this.db.execute(query);
    this.loadUsers();
    return result;
  }
  async updateUser(
    email: string,
    nombre: string,
    apellido: string,
    desc: string,
    peliculasFavoritas: string,
    seriesFavoritas: string,
    imagen: string
  ) {
    const query = `UPDATE Usuarios SET nombre='${nombre}', apellidoPaterno='${apellido}', desc='${desc}', peliculasFavoritas='${peliculasFavoritas}', seriesFavoritas='${seriesFavoritas}', imagen='${imagen}' WHERE email='${email}' `;
    const result = await this.db.execute(query);
    const query2 = `SELECT * FROM Usuarios WHERE email='${email}'`;
    const result2 = await this.db.query(query2);
    this.usuario.next(result2.values[0]);
    this.loadUsers();
    return result;
  }
  async deleteUser(id: string) {
    const query = `DELETE FROM users WHERE id=${id}`;
    const result = await this.db.execute(query);
    this.loadUsers();
    return result;
  }
  async GetFavorites(id: string) {
    try {
      const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
      const result = await this.db.query(query);
      console.log(result.values, 'aqui');
      if (result.values) return result.values[0];
    } catch (error) {
      return false;
    }
  }
  async GetFavoritesSeries(id: string, tipo: string) {
    try {
      const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
      const result = await this.db.query(query);
      console.log(result.values, 'aqui');
      if (tipo === 'series') {
        if (result.values) return result.values[0].SeriesFavoritas;
      } else {
        if (result.values) return result.values[0].PeliculasFavoritas;
      }
    } catch (error) {
      return false;
    }
  }
  async AddFavoritesSeries(id: string, series: string, tipo: string) {
    //  NOT OVERWRITE
    const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
    const result = await this.db.query(query);
    console.log(JSON.stringify(result.values), 'aqui');
    if (result.values) {
      if (tipo === 'series') {
        if (result.values[0].SeriesFavoritas === '') {
          const query2 = `UPDATE DatosUsuarios SET SeriesFavoritas="[]" WHERE IdDatos="${id}"`;
          const result2 = await this.db.query(query2);
        } else {
          const seriesFavoritas = JSON.parse(result.values[0].SeriesFavoritas);
          seriesFavoritas.push(series);
          const query2 =
            'UPDATE DatosUsuarios SET SeriesFavoritas=? WHERE IdDatos=?';
          const result2 = await this.db.query(query2, [
            JSON.stringify(seriesFavoritas),
            id,
          ]);
        }
      }
      if (tipo === 'peliculas') {
        if (result.values[0].PeliculasFavoritas === '') {
          const query2 = `UPDATE DatosUsuarios SET PeliculasFavoritas="[]" WHERE IdDatos="${id}"`;
          const result2 = await this.db.query(query2);
        } else {
          const seriesFavoritas = JSON.parse(
            result.values[0].PeliculasFavoritas
          );
          seriesFavoritas.push(series);
          const query2 =
            'UPDATE DatosUsuarios SET PeliculasFavoritas=? WHERE IdDatos=?';
          const result2 = await this.db.query(query2, [
            JSON.stringify(seriesFavoritas),
            id,
          ]);
        }
      }

      return true;
    } else {
      return false;
    }
  }
  async DeleteFavoritesSeries(id: string, series: string, tipo: string) {
    if (tipo === 'series') {
      const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        const seriesFavoritas = JSON.parse(result.values[0].SeriesFavoritas);
        seriesFavoritas.splice(seriesFavoritas.indexOf(series), 1);
        const query2 =
          'UPDATE DatosUsuarios SET SeriesFavoritas=? WHERE IdDatos=?';
        const result2 = await this.db.query(query2, [
          JSON.stringify(seriesFavoritas),
          id,
        ]);
        return true;
      } else {
        return false;
      }
    } else {
      const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        const seriesFavoritas = JSON.parse(result.values[0].PeliculasFavoritas);
        seriesFavoritas.splice(seriesFavoritas.indexOf(series), 1);
        const query2 =
          'UPDATE DatosUsuarios SET PeliculasFavoritas=? WHERE IdDatos=?';
        const result2 = await this.db.query(query2, [
          JSON.stringify(seriesFavoritas),
          id,
        ]);
        return true;
      } else {
        return false;
      }
    }
  }
  // getUser by email
  async getUser(email: string) {
    const query = `SELECT * FROM Usuarios WHERE email='${email}'`;
    const result = await this.db.query(query);

    return result.values[0];
  }

  getUsers() {
    console.log(this.user);
    return this.user;
  }
}
