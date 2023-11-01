import React from "react"

class TeamMember {
    constructor (name, position, image, bio, redirect) {
        this.name = name
        this.position = position
        this.image = image
        this.bio = bio
        this.redirect = redirect
    }

    display() {
        return (
            <div className="" style={{width: "270px", marginRight: "2rem"}}>
                <img className="team-thumbnail" src={this.image} alt={this.name}/>
                <h2>{this.name}</h2>
                <h3>{this.position}</h3>
                <p>{this.bio}</p>
            </div>
        )
    }
}

export default TeamMember