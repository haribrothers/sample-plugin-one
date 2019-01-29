export class MyPlugin {
  private _license: string;
  private _resolve: (value?: any) => void;

  getStatus(): Promise<any>{
    return new Promise((resolve, reject) => {
      this._resolve = resolve;
      let thePrinterConn = MfiBtPrinterConnection.alloc().initWithSerialNumber("XXQPJ162400947");
      let success = thePrinterConn.open();
      return this._resolve(success);
    });
  }
    
}