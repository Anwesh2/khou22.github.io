var reader = new FileReader(); //New reader
var readerOutput; //Declare global
reader.onload = function(e) { //Callback if reader is used
  readerOutput = reader.result; //Stores the results
  console.log("File Reader Complete"); //Feedback
}
var callbackTime = 1000;

var StrToArray = function(data) {
  console.log(data);
  var strArray = [];
  var splitAt = [" ", "-"]; //What constitutes a new word
  var array1 = data.split(splitAt[0]);
  for (var i = 0; i < array1.length; i++) {
    strArray.push(array1[i]); //First split
  }
  for (var z = 1; z < splitAt.length; z++) { //All other splits
    for (var i = 0; i < strArray.length; i++) {
      if (strArray[i].indexOf(splitAt[z])) {
        var array = strArray[i].split(splitAt[z]);
        for (var j = 0; j < array.length; j++) {
          strArray.push(array[j]);
        }
        strArray.splice(i, 1); //Remove element
      }
    }
  }
  console.log(strArray); //Feedback
  return(strArray); //Return array
}

var TextAnalysis = React.createClass({
  getInitialState: function() {
    return {
      textInput: "Kevin Hou. Hello hello test-st r hi hi hi hi hi this is a test string."
    }
  },
  loadFile: function() {
    // console.log("Loading file"); //Feedback
    var selectedFile = document.getElementById('selectedFile').files[0]; //Find file
    // console.log(selectedFile); //Feedback
    setTimeout(this.uploadComplete.bind(this), callbackTime); //Create artificial callback to allow reader to do its work
    reader.readAsText(selectedFile); //Use the reader
    return false; //Prevent page auto-refresh
  },
  uploadComplete: function() {
    console.log(readerOutput);
    this.setState({
      textInput: readerOutput
    })
  },
  render: function() {
    return (
      <div>
        <div className="TA-file-input">
          <form onSubmit={this.loadFile.bind(this)}>
            Select text file: <input type="file" id="selectedFile" name="text" accept=".txt" />
            <input type="submit" Value="Analyze"/>
          </form>
        </div>
        <CheckInput textInput={this.state.textInput} />
        <Analysis data={this.state.textInput} />
      </div>
    )
  }
});

var CheckInput = React.createClass({
  render: function() {
    return (
      <div>
        Inputed text:
        <p>{this.props.textInput}</p>
      </div>
    )
  }
});

var Analysis = React.createClass({
  getInitialState: function() {
    var data = this.props.data;
    var strArray = StrToArray(data); //Run function
    return {
      str: this.props.data,
      strArray: strArray
    }
  },
  componentWillReceiveProps: function(props) { //Repeat the breakdown every time text is changed
    var data = props.data;
    var strArray = StrToArray(data); //Run function
    this.setState({
      str: props.data,
      strArray: strArray
    });
  },
  render: function() {
    var wordNodes = this.state.strArray.map(function(word) {
      var str = word + ", ";
      return (str)
    });
    return (
      <div>
        {wordNodes}
      </div>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="contact-header">Text Analysis App</h1>
        <br />
        Started: October 17 2015 8:20 PST
        <hr />
        <TextAnalysis />
      </div>
    )
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('content')
);