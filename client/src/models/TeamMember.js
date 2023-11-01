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
            // <div className="cell small-12" style={{width: "270px", marginRight: "2rem"}}>
            <div className="cell small-12 medium-6 large-3 team-container" >
                <img className="team-thumbnail" src={this.image} alt={this.name}/>
                <h3>{this.name}</h3>
                <h4>{this.position}</h4>
                <p>{this.bio}</p>
            </div>
        )
    }
}

export default TeamMember