import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroFrontendService {

  constructor() { }

  async loadAppRemoteModule(port: number, remoteName: string) {
    try {
      const module = await loadRemoteModule({
        remoteEntry: `http://localhost:${port}/remoteEntry.json`,
        exposedModule: './Component',
        remoteName: remoteName,
      });
      console.log('✅ Loaded remote module:', module);
      return module;
    } catch(err) {
      console.error('Error loading remote module', err);
      throw err;
    }
      }
    }
