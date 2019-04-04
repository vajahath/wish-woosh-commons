export interface IRenderFile {
  /**
   * relative path to the file. No trailing slashes.
   */
  filePath: string;

  /**
   * data to be passed into the ejs rendering engine
   */
  dataToRender: { [key: string]: any };

  /**
   * content of the file. this is filled on project creation time by firebase functions.
   */
  content?: string;
}
