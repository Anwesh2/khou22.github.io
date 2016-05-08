//Landing page for my website

var images = new Array() //Declare array
function preload() { //Preload the images ahead of time so they don't lag
  for (i = 0; i < preload.arguments.length; i++) {
    // console.log("Preloading:", images[i]); //Feedback
    images[i] = new Image() //Creates the image tag for each image
    images[i].src = preload.arguments[i]
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex; //Arguments
  while (0 !== currentIndex) { //If still elements to shuffle
    randomIndex = Math.floor(Math.random() * currentIndex); //Pick random element
    currentIndex -= 1; //Subtract from total
    temporaryValue = array[currentIndex]; //Store
    array[currentIndex] = array[randomIndex]; //Set replacement
    array[randomIndex] = temporaryValue; //Set replacement
  }
  return array;
}

/****************************** Start of components ******************************/

var LandingPage = React.createClass({
  getInitialState: function() {
    var shuffleBackgrounds = true;
    var notificationData = {
      // Types are 'alert', 'notice'
      type: "notice",
      // message: "New video released: Wood Turned Segmented Bowl with Inlaid Letters",
      message: "New wood project: Wood Turned Segmented Bowl with Inlaid Letters",
      link: "https://youtu.be/_ZSztfYnnC8"
    };
    var backgrounds = [
      // "./../media/site/images/backgrounds/Wood_Turned_Segmented_Bowl_with_Inlaid_Letters.jpg", // Automatically first image, so commented out
      "./../media/site/images/backgrounds/Walnut_Poplar_Salad_Bowl.jpg",
      "./../media/site/images/backgrounds/Walnut_and_Aluminum_Headphone_Stand.jpg",
      "./../media/site/images/backgrounds/Basket_Weave_Cutting_Board.jpg",
      "./../media/site/images/backgrounds/Bulbish_Sapele_Bowl.jpg",
      "./../media/site/images/backgrounds/Walnut_and_Maple_Amplifier.jpg",
      "./../media/site/images/backgrounds/Tropical_Wood_Phone_Stand.jpg",
      "./../media/site/images/backgrounds/Maple_Baseball_Bat.jpg",
      "./../media/site/images/backgrounds/Gavel.jpg",
      "./../media/site/images/backgrounds/Walnut_and_Maple_Single_Speaker.jpg",
      "./../media/site/images/backgrounds/Maple_and_Walnut_Visualizer.jpg",
      "./../media/site/images/backgrounds/Fruit_Tart.jpg",
      "./../media/site/images/backgrounds/Wood_Pens.jpg",
      "./../media/site/images/backgrounds/MusicViz.png",
      "./../media/site/images/backgrounds/Japanese_Square_Plate.jpg",
      "./../media/site/images/backgrounds/Online_Sandwich_Ordering_Machine.jpg",
      "./../media/site/images/backgrounds/Kevin_Turning_Chaote_Viga.jpg",
      "./../media/site/images/backgrounds/Turning_Chaote_Viga.jpg"
    ];
    setTimeout(function() {document.getElementById("mainDiv").classList.add('div-fade-in');}, 1);
    preload("./../media/site/images/Profile.jpg"); //Preload profile picture
    if (shuffleBackgrounds) { //If shuffle
      shuffle(backgrounds); //Shuffle backgrounds
    }
    var firstImage = "./../media/site/images/backgrounds/Wood_Turned_Segmented_Bowl_with_Inlaid_Letters.jpg";
    var finalRay = [firstImage]; //Add first image
    for (var i = 0; i < backgrounds.length; i++) {
      finalRay.push(backgrounds[i]); //Add shuffled to the final array of images
    }
    setTimeout(function() { //Start slideshow after 10 seconds
      document.getElementById("backgroundDiv").classList.add('background-fade'); //Add the fade animation
      setInterval(this.nextBackground.bind(this), 5000);
    }.bind(this), 7000);
    for (var i = 0; i < finalRay.length; i++) { //Cycle through backgrounds
      preload(finalRay[i]); //Preload every background
    }
    return {
      notificationData: notificationData,
      backgroundURLs: finalRay,
      currentBackground: 0 //Index in array of backgrounds
    };
  },
  nextBackground: function() {
    document.getElementById("backgroundDiv").classList.remove('background-fade');
    if (this.state.currentBackground < this.state.backgroundURLs.length - 1) { //if not the last background in array
      this.setState({
        currentBackground: this.state.currentBackground + 1 //Go to next background index
      });
    } else {
      this.setState({
        currentBackground: 0 //Reset index
      })
    }
    setTimeout(function() {document.getElementById("backgroundDiv").classList.add('background-fade');}, 25);
  },
  render: function() {
    var URL = this.state.backgroundURLs[this.state.currentBackground];
    var BackURL = this.state.currentBackground >= this.state.backgroundURLs.length-1 ? this.state.backgroundURLs[0] : this.state.backgroundURLs[this.state.currentBackground + 1];
    var backgroundStyle = {
      backgroundImage: 'url(' + URL + ')',
    };
    // console.log("Current background image:", backgroundStyle); // Feedback
    var backgroundStyleBack = {
      backgroundImage: 'url(' + BackURL + ')',
    };
    return (
      <div id="mainDiv">
        <div className="content-area">
          <ProfileBox />
          <ModalBox showModal={false} />
        </div>
        <NotificationBar notificationData={this.state.notificationData} />
        <div className="landing-background" style={backgroundStyleBack}></div>
        <div id="backgroundDiv" className="landing-background" style={backgroundStyle}></div>
      </div>
    );
  }
});

var NotificationBar = React.createClass({
  render: function() {
    var message = this.props.notificationData.message;
    var iconClass = ""; // Using bootstrap glyphicons
    switch(this.props.notificationData.type) {
      case "alert":
        iconClass = "glyphicon glyphicon-alert"; // Set to alert sign
        iconClass += " landing-alert-sign"; // Add custom class
        break;
      case "notice":
        iconClass = "glyphicon-info-sign"; // Set to info sign
        iconClass += " landing-info-sign"; // Add custom class
        break;
      default:
        iconClass = "glyphicon-info-sign"; // Default is info sign
    };
    return (
      <a href={this.props.notificationData.link} target="_blank">
        <div className="landing-notification-bar">
          <div className="landing-notification-symbol">
            <span className={"glyphicon " + iconClass} aria-hidden="true"></span>
          </div>
          <div className="landing-notification-content">
            {message}
          </div>
        </div>
      </a>
    )
  }
})

var ProfileBox = React.createClass({
  redirect: function(page) {
    switch (page) {
      case "wood":
        window.open("https://kevinhou.wix.com/projects#!wood/c1han", '_blank);');
        break;
      case "blog":
        location.href="/blog";
        break;
      case "programming":
        window.open("http://kevinhou.wix.com/projects#!woodprojects/ckra", '_blank);');
        break;
      default:
    };
  },
  render: function() {
    return (
      <div>
        <div className="profile-name" id="kevin">
          Kevin Hou
        </div>
        <div className="cardDiv">
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <div className="profile-picture"></div>
              </div>
              <div className="back">
                <div className="profile-about">
                  <div className="profile-about-text">
                    <p style={{"fontSize": "2rem", "lineHeight": "0rem"}}>Portfolio and Blog</p>
                    <hr style={{"marginTop": "14px"}}/>
                      Lick-Wilmerding &#39;16
                    <hr style={{"marginTop": "14px"}}/>
                    <p>Wood. Coding. Computers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-blog">
          <PageButton className="blog-button" redirect={this.redirect.bind(this, "wood")} iconClass="wood-icon" label="Wood" left={56}/>
          <PageButton className="blog-button" redirect={this.redirect.bind(this, "blog")} iconClass="blog-icon" label="Blog" left={160}/>
          <PageButton className="blog-button" redirect={this.redirect.bind(this, "programming")} iconClass="code-icon" label="Coding" left={264}/>
        </div>
      </div>
    );
  }
});

var PageButton = React.createClass({
  mouseHover: function() {
    // console.log("H")
  },
  render: function() {
    var buttonStyle = {
      left: this.props.left
    }
    return (
      <button className={this.props.className + " " + this.props.iconClass} onClick={this.props.redirect.bind(this)}>
        <div className="icon-label">{this.props.label}</div>
      </button>
    );
  }
})

var ModalBox = React.createClass({
  render: function() {
    if (this.props.showModal) {
      return (
        <div aria-hidden="false" role="dialog" className="modal">
          <div className="modal__container">
            <div className="modal__header">
              Header
            </div>
            <div className="modal__content">
              Content
            </div>
            <div className="modal__footer">
              Footer
            </div>
          </div>
          <div className="modal-backdrop">
          </div>
        </div>
      );
    } else {
      return (
        <span></span>
      )
    }
  }
})

React.render(
  React.createElement(LandingPage, null),
  document.getElementById('content')
);

var theater = theaterJS({ local: 'fr' })

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })

theater
  .addActor('kevin', { speed: 0.6, accuracy: 0.7 })
  .addScene('kevin:Kevin Hou', 2000)
  .addScene('kevin:Welcome!', 1000)
  .addScene('kevin:Kevin Hou', 2000)
  .addScene(theater.replay.bind(theater))
