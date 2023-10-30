import "./stories.scss";

function Stories() {
    const stories = [
        {
            id: 1,
            name : "eya abid",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 2,
            name : "eya abid",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 3,
            name : "eya abid",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 4,
            name : "eya abid",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },


    ]
  return (
    <div className='stories'>
      {stories.map(story => (
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
