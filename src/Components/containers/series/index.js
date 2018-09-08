import React,{Component} from 'react';
import SeriesList from '../seriesList'


class Series extends Component {
	state = {
     series:[],
     seriesName: '',
     isFetchingProperity: false
   }
   


   componentDidMount(){
      
   }


   onSeriesInputChange= e =>{

   	this.setState({seriesName: e.target.value, isFetchingProperity:true  });
   	fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => {
        this.setState({
          series: json,
          isFetchingProperity:false
        });
      });
   	
   }

	render(){


		const {series,seriesName,isFetchingProperity}= this.state			



		
		return(
			<div>
			 
			 <div>
			 	<input value={seriesName}  
				 	type="text" 
				 	onChange={this.onSeriesInputChange}
				/>
			 </div>
			 {
			 	series.length === 0 && seriesName.trim() === ''
			 	&&
			 	<p>Please entert the seriesName in the input</p>
			 }
			 {
			 	series.length === 0 && seriesName.trim() !== ''
			 	&&
			 	<p>No TV series has this name</p>
			 }

			 {
			 	isFetchingProperity && <p>Loading.....</p>
			 }

			 {
           
                !isFetchingProperity && <SeriesList list={this.state.series} />

			 }
			  
			</div>

			)
	}
}


export default Series;