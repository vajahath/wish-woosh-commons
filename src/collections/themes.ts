export interface ITheme {
  /**
   * theme image (like thumbnail)
   */
  displayImage: string;

  /**
   * theme gallery image.
   */
  gallery?: Array<{
    /**
     * original src
     */
    src: string;
    /**
     * width
     */
    w: number;
    /**
     * height
     */
    h: number;
  }>;

  /**
   * Amount to pay the user to remove ads
   */
  removeAdsPrice?: number;

  /**
   * preview URL.
   */
  previewUrl: string;

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
   * theme src root path where theme assets are stored. (Storage bucket path)
   */
  srcRoot: string;

  /**
   * static files of the theme stored in the storage bucket. these files
   * don't need processing. they are just copied to the live project bucket
   * when user creates this project. These are stored in the builder module.
   * No need to store in db.
   *
   */
  srcStaticFiles?: string[];

  /**
   * files that requires rendering. these files are passed into ejs rendering engine
   * with the data to render. In `projects' collection, `destDynamicRenderFiles` are
   * created with this data. These are stored in the builder module.
   * No need to store in db.
   */
  srcDynamicFiles?: string[];

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
