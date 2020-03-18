import { Usuario } from "app/user/user.interface";

export interface Software{
    name            : string;
    nickname        : string;
    publicKey       : string;
    privateKey      : string;
    urlUserManual   : string;
    emailContact    : string;
    mobileVersion   : boolean;
    active          : boolean;
    inMaintenance   : boolean;
    consideration   : string;
    usuarioList     : Usuario[]
}