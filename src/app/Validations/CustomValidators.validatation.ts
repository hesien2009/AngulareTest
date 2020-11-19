import { AbstractControl, ValidationErrors } from "@angular/forms"




export class TextValidate {
    static nospaceAllowed(control: AbstractControl): ValidationErrors | null
{
    if ((control.value as string).indexOf(' ') != -1) {
        return { nospaceAllowed: true };
    }
    else
        return null;
}

static shoudBeUniq(control: AbstractControl): Promise<ValidationErrors> | null
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if((control.value as string)=='hesien_20092yahoo.com')
            {
                resolve({shoudBeUniq:true});
            }
            else
            {
                resolve(null);
            }
        }, 2000);
    })
}


}