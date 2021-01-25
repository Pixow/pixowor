import { Injectable } from "@angular/core";

// @dynamic
@Injectable()
export class LocalStorageService {
  static instance: LocalStorageService;

  constructor() {
    LocalStorageService.instance = this;
  }

  public set(key: string, data: string | object) {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }

  public get(key: string) {
    const data = localStorage.getItem(key);

    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
