import { Software } from "app/aplicativo/software/software.interface";

export interface Usuario{
    id              : number;
    company         : string;
	userName        : string;
	password        : string;
    email           : string;
	firstName       : string;
	lastName        : string;
	address         : string;
	city            : string;
	country         : string;
	postalCode      : string;
	consideration   : string;

	softwaresList	: Software[];
}