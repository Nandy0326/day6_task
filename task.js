/*class movie{
    constructor(title,studio,rating )
    {
        this.title=title;
        this.studio=studio;
        this.rating="PG";

    }

getPG()
{
    console.log( `Rating: ${this.rating}`);

}
}
let movie1=new movie("PG13");
movie1.getPG();
*/
/*class movie{
    constructor(title,studio,rating )
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
}

    let CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
*/
/*


    class circle{
        constructor(radius,color)
        {
            this.radius=1;
            this.color="Red";

        }
        getRadius()
        {
            return this.radius;
        }
        setRadius(radius )
        {
            return this.radius;

        }
        getColor()
        {
            return this.color;

        }
        toString()
        {
            console.log(`Circle[radius=${this.radius}],color=${this.color}`);

        }
        getArea()
        {
            return 22/7*this.radius*this.radius;

        }
        getCircumference()
        {
            return 2*22/7*this.radius;
        }
    }
    let circle1=new circle(1,"red");
    circle1.toString();
    console.log(circle1.getArea());
    console.log(circle1.getCircumference());
    */


class person{
    constructor(firstname,lastname,location,phonno)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.location=location;
        this.phonno=phonno;

    }
    getDetails()
    {
        console.log(`Name:${this.firstname} ${this.lastname} Location:${this.location} Phonenumber:${this.phonno}`);

    }

}
let person1=new person("Nandhini","Ponvel","Chennai",8778079228);
person1.getDetails();

