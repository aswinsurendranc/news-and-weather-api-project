// b46fdfa2b0a442c8a8126246904c8368

let SportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let BusinessApi = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let EntertainmentApi = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let HealthApi = "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let ScienceApi = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let TechnologyApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b46fdfa2b0a442c8a8126246904c8368";

//................sports news starts from here...........

window
	.fetch(SportsApi)
	.then(SportsData => {
		SportsData.json()
			.then(sports => {
				let SportsInfo = sports.articles;
				let firstSportsBlock = sports.articles;
				let sportsnewsBlockOne = firstSportsBlock[0];
				document.getElementById("sportsFirstTemplate").innerHTML = `
				<ul>
					<img src="${sportsnewsBlockOne.urlToImage}" />
					<a href="${sportsnewsBlockOne.url}" target="_block">
						
					</a>
				</ul>
				`;
				let output = [];
				for (let sport of SportsInfo) {
					//console.log(sport);
					output += `
					<ul class="list-group">							
						<a href="${sports.url}" target="_blank" >
							<li class="text-dark">${sport.title}</li>
						</a>
					</ul>	
					`;
					document.getElementById("sportsAllTemplate").innerHTML = output;
				}
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));
//...........................................................................................................................

//......................entertainment api......................

window
	.fetch(EntertainmentApi)
	.then(entertainmentData => {
		entertainmentData.json()
			.then(entertainment => {
				let entertainmentInfo = entertainment.articles;
				// let firstentertainmentBlock = entertainment.articles;
				// let ertainmentnewsBlockOne = firstentertainmentBlock[0];
				// document.getElementById("entertainmentFirstTemplate").innerHTML = `
				// <ul>
				// 	<img src="${ertainmentnewsBlockOne.urlToImage}" />
				// 	<a href="${ertainmentnewsBlockOne.url}" target="_block">
						
				// 	</a>
				// </ul>
				// `;
				let output = [];
				for (let entertainments of entertainmentInfo) {
					//console.log(sport);
					output += `
					<ul class="list-group">	
						<img src="${entertainments.urlToImage}" width=40% height=40% />						
						<a href="${entertainments.url}" target="_blank" >
							<li class="text-white">${entertainments.title}</li>
						</a>
					</ul>	
					`;
					document.getElementById("entertainmentAllTemplate").innerHTML = output;
				}
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));



