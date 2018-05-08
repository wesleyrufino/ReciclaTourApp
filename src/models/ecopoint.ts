export class Escola{
    public id: number;
    public nome : string;
    public telefone : string;
    public email: string;
    public endereco : string;
    public cidade : string;
    public uf: string;
    public mapa : string;
    
    constructor(
        id : number, 
        nome : string, 
        telefone: string,
        email: string,
        endereco : string, 
        cidade: string,
        uf: string,
        mapa: string
        )
    {
        
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.cidade = cidade;
        this.uf = uf;
        this.mapa = '';
    }

    getEndereco() : string{
        return this.endereco + ', ' + this.cidade + ' - ' + this.uf;
    }

    getMapa() : string{
        return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' 
        + this.endereco + '&key=XJCOgEcoeyGt-iUjLxzAnOXQ5ng=';
    }
}