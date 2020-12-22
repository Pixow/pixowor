import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  constructor() {}

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
      const ret = JSON.parse(data);
      return ret;
    } catch (error) {
      return data;
    }
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
