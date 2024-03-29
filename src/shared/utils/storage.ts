function checkLocalStorage() {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}

class FallbackStorage {
  private fallbackStorage: {
    [key: string]: string;
  } = {};

  private valid: boolean = checkLocalStorage();

  public setItem(key: string, value: any) {
    const string = JSON.stringify(value);
    if (this.valid) {
      localStorage.setItem(key, string);
      return;
    }
    this.fallbackStorage[key] = string;
  }

  public getItem(key: string) {
    const value = this.valid
      ? localStorage.getItem(key)
      : this.fallbackStorage[key];
    try {
      const parsed = JSON.parse(value || "");
      return parsed;
    } catch (e) {
      return null;
    }
  }

  public removeItem(key: string) {
    if (this.valid) {
      localStorage.removeItem(key);
      return;
    }
    delete this.fallbackStorage[key];
  }
}

const storage = new FallbackStorage();

export default storage;
