// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client"

export type Path =
  | `/`
  | `/about`
  | `/posts`
  | `/posts/:id`
  | `/posts/:id/comments/:commentId`

export type Params = {
  "/posts/:id": { id: string }
  "/posts/:id/comments/:commentId": { id: string; commentId: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
