export interface ITheme {
  /**
   * theme image (like thumbnail)
   */
  displayImage: string;

  /**
   * name of the theme
   */
  name: string;

  /**
   * description of theme
   */
  description: string;

  /**
   * labels for classifying
   */
  labels: string[];

  /**
   * angular builder module path. this module will be lazy loaded when
   * user start creating this theme
   */
  builder: string;

  /**
   * theme src root path where theme assets are stored. (Storage bucket path)
   */
  srcRoot: string;

  /**
   * static files of the theme stored in the storage bucket. these files
   * don't need processing. they are just copied to the live project bucket
   * when user creates this project.
   */
  srcStaticFiles: string[];

  /**
   * files that requires rendering. these files are passed into ejs rendering engine
   * with the data to render. In `projects' collection, `destDynamicRenderFiles` are
   * created with this data.
   */
  srcDynamicFiles: string[];

  /**
   * path of the document snapshot when fetched with firebase sdk
   *
   * @extras
   */
  _path?: string;

  /**
   * id of the document when fetched with firebase sdk
   *
   * @extras
   */
  _id?: string;
}
