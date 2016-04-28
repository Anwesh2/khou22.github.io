var ProjectsPage = React.createClass({
  getInitialState: function() {
    return {
      projectData: [
        {
          name: "Uber Scheduler",
          slug: "Uber-Scheduler",
          description: "An iOS app to call Ubers ahead of time or on a recurring schedule. I was the frontend engineer and designer. We built this at a hackathon and won 1st place overall."
        },
        {
          name: "Execute Order 66",
          slug: "Execute-Order-66",
          description: "A Google Chrome Extension that cleanses the profanity out of your GitHub repos."
        },
        {
          name: "Text Analysis",
          slug: "text-analysis",
          description: "An app to analyze the user's text for patterns, word choice, etc. It accepts text files as well as Facebook user data."
        },
        {
          name: "Drag and Drop Interface",
          slug: "drag-drop-interface",
          description: "A simple drag and drop interface that uses ReactJS and HTML5 to mimic the Desmos equation editor."
        },
        {
          name: "Stats Test Score Calculator",
          slug: "stats-test-score-calculator",
          description: "An app to automatically calculate test scores and apply a grading curve. Built for Triggs Honors Stats Classes."
        },
        {
          name: "Time Calculator",
          slug: "time-calculator",
          description: "An app that takes in an ambiguous number of times and outputs the average of those times. Made this for my friend who does crew."
        },
        {
          name: "Presidential Election Forecast 2016",
          slug: "presidential-election-forecast-2016",
          description: "Runs simulations and forecasts who will win the 2016 presidential election. Right now it only simulates who will win the Republican candidacy."
        },
        {
          name: "Browser Home Page",
          slug: "browser-home-page",
          description: "Custom browser home page with useful information and links. I set it to my tab/browser home page."
        },
        {
          name: "Honors Physics Optics Lab",
          slug: "{{ site.baseurl }}/school/optics/",
          description: "A website I made from scratch for a physics lab on optics and waves. It was neat being able to make a website instead of a traditional website."
        },
        {
          name: "Hollywood's Portrayal of Africa",
          slug: "{{ site.baseurl }}/school/postcolonial-africa/",
          description: "A website I made to highlight the steryeotypes and microaggressions present in Hollywood films towards Africa. It was an interesting topic that isn't often thought about."
        },
        {
          name: "Self-Designed Wallpapers",
          slug: "{{ site.baseurl }}/blog/wallpapers/",
          description: "Some wallpapers I designed from the ground up. Mutliple versions for multiple different devices."
        },
        {
          name: "Wood Club",
          slug: "wood-club",
          description: "The birth and evolution of Wood Club - a club I lead at my high school"
        }
      ]
    }
  },
  render: function() {
    return (
      <div>
        <h1 className="contact-header">Projects</h1>
        <ProjectsList data={ this.state.projectData }/>
      </div>
    );
  }
})

var ProjectsList = React.createClass({
  getInitialState: function() {
    return {
      projects: this.props.data,
      numPerRow: 3
    };
  },
  render: function() {
    var index = -1; // Adding one immediately
    var numPerRow = this.state.numPerRow;
    var projectNodes = this.props.data.map(function(data) {
      index++; // Advance index every cycle
      console.log(data); // Feedback
      var temp = [data]; // Just so I can use the map function
      var newRowNodes = temp.map(function(data) {
        console.log(data.name); // debugging

        // If not in the projects folder, load complete URL
        // Replace baseurl with actual base URL
        var projectURL = data.slug.replace("{{ site.baseurl }}", "http://khou22.github.io");

        return (
          <tr>
            <h4 className="project-title"><a href={projectURL}>{data.name}</a></h4>
            <p className="project-description">{data.description}</p>
          </tr>
        )
      });
      console.log(index, numPerRow)
      console.log(index % numPerRow);
      // if (index % numPerRow == 0) { // The first one in each row
      //   // Start a new row
      //   console.log("New row at", data.name)
      //   return (
      //     <tr>
      //       { newRowNodes }
      //     </tr>
      //   )
      // } else {
        // Continue on same row
        return (
          { newRowNodes }
        )
      // }
    });
    return (
      <div>
        <i>Ongoing projects that I write about. All wood projects can be found on my Project Portfolio, Flickr, YouTube, LinkedIn, etc.</i>
        <hr className="project-hr"/>
        <table>
          {projectNodes}
        </table>
      </div>
    )
  }
})

React.render(
  React.createElement(ProjectsPage, null),
  document.getElementById('content')
);
