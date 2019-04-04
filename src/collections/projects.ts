import * as firebase from "firebase/app";
import "firebase/firestore";

import { IRenderFile } from "./_Render-file";

export interface IProjects {
  /**
   * user id
   */
  owner: string;

  /**
   * name of the project
   */
  name: string;

  /**
   * reference of the theme from `themes` collection.
   *
   * type: `firebase.firestore.DocumentReference`
   */
  theme: firebase.firestore.DocumentReference;

  /**
   * name of the theme stored in `themes` collection.
   */
  themeName: string;

  /**
   * root source path of the theme in Storage bucket. Don't add trailing `/`.
   * Example: `theme-src/simple-text`
   */
  srcRootPath: string;

  /**
   * relative path of static files wrt `srcRootPath`.
   */
  srcStaticFiles: string[];

  /**
   * files that need to be rendered with user's data. type: `IRenderFile[]`
   */
  destDynamicRenderFiles: IRenderFile[];

  /**
   * destination root path in the live projects storage bucket
   */
  destRootPath: string;

  /**
   * Status of the project
   *
   * * `created`: project just created
   * * `abandoned`: project abandoned.
   * * `completed`: payment and other stuffs done if any.
   * * `published`: project is published and is live.
   *
   */
  status: "created" | "abandoned" | "completed" | "published";

  /**
   * final live project url. when clicked here, goes to the live page
   */
  liveUrl: string;

  /**
   * path of the document snapshot when fetched with firebase sdk
   *
   * @extras
   */
  _path?: string;

  /**
   * id of the doc when fetched with firebase sdk
   *
   * @extras
   */
  _id?: string;
}
