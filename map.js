var app=getApp();
var comm=require("../../utils/comm");

const normalCallout = {
	id: 1,
	latitude: 28.23830,
	longitude: 112.93440,
  }
  const customCallout1 = {
	id: 2,
	latitude: 28.23340,
	longitude: 112.93045,
  }
  const customCallout2 = {
	id: 3,
	latitude: 28.23540,
	longitude: 112.92712,
  }
  const customCallout3 = {
	id: 4,
	latitude: 28.23500,
	longitude: 112.93585,
  }
  const result = [normalCallout, customCallout1, customCallout2, customCallout3]

Page({
	data:{
		markers:[],
	},

	//获得党员之家的数据，并显示标记
	getDang:function(){
		 var that=this;
		for(var i=0;i<4;i++){
			let latitude=result[i].latitude;
			let longitude=result[i].longitude;
			var index="markers["+(i+1)+"]";
			let lat0=that.data.markers[0].latitude;
			let lng0=that.data.markers[0].longitude;
			var dis = Math.floor(comm.GetDistance(lng0,lat0,longitude,latitude));
			this.setData({
				// markers,
				// customCalloutMarkerIds:[1,2,3],
				[index]:{
					latitude:latitude,
					longitude:longitude,
					iconPath:"/images/image1/dang.png",
					width:40,
					height:45,
					callout:{
						content:"党员之家  "+dis+"米",
						fontSize:13,
						color:"#8B0000",
						borderRadius:5,
						borderWidth:1,
						padding:2,
						display:"ALWAYS"
					  }
			}
			})
		}	
	},

//获得卫生模范的数据，并显示标记
getClean:function(){
	var that=this;
   for(var i=0;i<4;i++){
	   let latitude=result[i].latitude;
	   let longitude=result[i].longitude;
	   var index="markers["+(i+1)+"]";
	   let lat0=that.data.markers[0].latitude;
	   let lng0=that.data.markers[0].longitude;
	   var dis = Math.floor(comm.GetDistance(lng0,lat0,longitude,latitude));
	   this.setData({
		   [index]:{
			   latitude:latitude,
			   longitude:longitude,
			   iconPath:"/images/image1/clean.png",
			   width:39,
			   height:45,
			   callout:{
				   content:"卫生模范  "+dis+"米",
				   fontSize:13,
				   color:"#4169E1",
				   borderRadius:5,
				   borderWidth:1,
				   padding:2,
				   display:"ALWAYS"
				 }
	   }
	   })
   }	
},

//获得独居老人的数据，并显示标记
getOld:function(){
	var that=this;
   for(var i=0;i<4;i++){
	   let latitude=result[i].latitude;
	   let longitude=result[i].longitude;
	   var index="markers["+(i+1)+"]";
	   let lat0=that.data.markers[0].latitude;
	   let lng0=that.data.markers[0].longitude;
	   var dis = Math.floor(comm.GetDistance(lng0,lat0,longitude,latitude));
	   this.setData({
		   [index]:{
			   latitude:latitude,
			   longitude:longitude,
			   iconPath:"/images/image1/old.png",
			   width:40,
			   height:45,
			   callout:{
				   content:"独居老人  "+dis+"米",
				   fontSize:13,
				   color:"#C71585",
				   borderRadius:5,
				   borderWidth:1,
				   padding:2,
				   display:"ALWAYS"
				 }
	   }
	   })
   }	
},

	onLoad: function(){
		var that=this;
		wx.getLocation({
		  success: function(res){
			  console.log(res);
			  that.setData({
				  markers:[{
					  latitude:res.latitude,
					  longitude:res.longitude,
					  iconPath:"/images/image1/地图.png",
					  width:40,
					  height:45,
					  callout:{
						  content:"我的位置",
						  fontSize:13,
						  color:"#32CD32",
						  borderRadius:5,
						  borderWidth:1,
						  padding:2,
						  display:"ALWAYS"
					  }
				  }]
			  })
		  }
		})

	}




})