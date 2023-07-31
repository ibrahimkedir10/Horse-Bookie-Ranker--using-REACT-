// note the name of the class must be capitalized 
class MyHorseDisplay extends React.Component {
    constructor(props) {
       super(props)
       // bookIndex is the only part of the state that will be changed by the user 
       // the property calls books which is an array of book objects which will come from reading a json file
       // the isLoading property lets one know when the file has been read
       this.state = {
          horseIndex: 0,
          horses: [],
          isLoading: true
       }
    }
 
    handleChange = e => {
       // setState() is async
       this.setState({ horseIndex: event.target.value });
       /*
          that means don't do anything here that requires an updated bookIndex
          because of the way the cover image and author are handled (see below) 
          they will change when setState has finished
       */
    }
 
    componentDidMount() {
       //this.setState({ isLoading: true });
       fetch('lab15.json')
          .then(response => response.json())
          .then(data => this.setState({ horses: data, isLoading: false }));
       /*
          the JSON file holds an array, there might be changes if
          the JSON file holds an object with a property that is an array 
       */
    }
 
    render() {
       // The following code use React Fragment
       // Recall .map() is a way to loop over an array 
       // React requires you to pass in the key={} prop
       // https://reactjs.org/docs/lists-and-keys.html 
 
       /*
          we cannot do the real rendering until the data file is read (asynchronously) 
          hence the introduction of the isLoading attribute of the state 
       */
       if (this.state.isLoading) {
          return (<p>Loading ....</p>)
       } else {
          return (
             <> {/* React Fragment instead of a div to meet the single parent criterion */}
                <h1>Horse Collection</h1>
                <select value={this.state.sireIndex} onChange={this.handleChange}>
                   {
                      this.state.horses.map((horse, i) =>
                      (
                         <option key={i} value={i}>
                            {horse.horseName}
                         </option>
                      )
                      )
                   }
                </select>
                <br />
                {/*	THIS IS A JSX COMMENT WITHIN REACT -- note curly braces around JS comment
                             this.state.books is an array of objects
                             we want the element with an index this.state.bookIndex 
                             we want the book_cover property of that object	
                     */}
                {/* 
                             https://www.youtube.com/watch?v=Jh47pOXwGq0 
                             youtube video about React wanted the key property seen above
                     */}
                <img src={this.state.horses[this.state.horseIndex].horseSilks + ".jpg"} height="300" />
                <br />
                <span>Rank: </span>{this.state.horses[this.state.horseIndex].horseRank}
                <br />
                <span>Rating: </span>{this.state.horses[this.state.horseIndex].horseRating}
                <br />
                <span>Silks: </span>{this.state.horses[this.state.horseIndex].horseSilks}
                <br />
                <span>Sire: </span>{this.state.horses[this.state.horseIndex].horseSire}
                <br />
                <span>Trainers: </span>{this.state.horses[this.state.horseIndex].horseTrainer}
                <br />
                <span>Jockey: </span>{this.state.horses[this.state.horseIndex].horseJockey}
                <br />
                <iframe height="300" src= { "https://www.youtube.com/embed/" + this.state.horses[this.state.horseIndex].horseYouTubeCode}></iframe>
                
                <br />
             </>
          ) //match return
       } // match else of if 
    } //match render
 } //end MyhorseDisplay class
 
 ReactDOM.render(<MyHorseDisplay />, document.querySelector('#divhorseDisplay'))