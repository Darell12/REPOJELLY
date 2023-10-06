import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private connectionSpeedSubject = new BehaviorSubject<string>('Unknown');
  connectionSpeed$ = this.connectionSpeedSubject.asObservable();

  constructor() {
    this.detectConnectionSpeed();
  }

  private detectConnectionSpeed(): void {
    // @ts-ignore
    const connection =
      // @ts-ignore
      navigator.connection ||
      // @ts-ignore
      navigator.mozConnection ||
      // @ts-ignore
      navigator.webkitConnection;

    // @ts-ignore
    if (navigator.connection) {
      // @ts-ignore
      const connection = navigator.connection;

      // Utiliza eventos para detectar cambios en la velocidad de conexión
      connection.addEventListener('change', () => {
        this.updateConnectionSpeed(connection);
      });

      // Llama a la función inicial para establecer la velocidad de conexión
      this.updateConnectionSpeed(connection);
    } else {
      this.connectionSpeedSubject.next('Unknown');
    }
  }

  private updateConnectionSpeed(connection: any): void {
    const speed = connection.downlink;

    // Puedes personalizar cómo interpretas la velocidad según tus necesidades
    const speedCategory = this.getSpeedCategory(speed);

    this.connectionSpeedSubject.next(speedCategory);
  }

  private getSpeedCategory(speed: number): string {
    if (speed < 1) {
      return 'Slow';
    } else if (speed < 5) {
      return 'Moderate';
    } else {
      return 'Fast';
    }
  }
}
