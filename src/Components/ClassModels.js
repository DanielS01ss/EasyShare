import { ConstructionRounded } from "@mui/icons-material";

class User {
    
     
     constructor(name,id,email)
     {
        this.email = email;
        this.name = name;
        this.id = id;
        this.documents = [];
     }
}

export {User};