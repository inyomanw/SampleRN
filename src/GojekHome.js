/* eslint-disable */
import React from 'react';
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    TouchableOpacity,
    Touchable,
} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';

export default class GojekHome extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={{flex : 1}}>
                <ScrollView style={{backgroundColor:"white", flex : 1, paddingBottom:4}}>
                    {/* searchBar */}
                    <View style={{marginHorizontal:17, marginTop:12, flexDirection:"row"}}>
                        <View style={{
                            position:"relative",
                            marginRight:8,
                            flex:1}}>

                            <TextInput placeholder="What do you want to eat?" style={{
                            borderWidth:1, borderRadius:20,
                            paddingLeft:55, paddingRight: 20, height:41
                        }}/>
                            <Image source={require('../icon/search.png')} style={{
                            position:"absolute", top:8, left:15
                        }}/>
                        </View>
                        <View style={{width:35, alignItems:"center", justifyContent:"center"}}>
                            <Image source={require('../icon/promo.png')} />
                        </View>
                    </View>
                    {/* gopay */}
                    <View style={{marginTop:16, marginHorizontal: 17}}>
                        {/* logo atas */}
                        <View style={{flexDirection:'row', justifyContent:'space-between',
                                      backgroundColor:'#2C5FB8', padding:14,
                                      borderTopLeftRadius:6, borderTopRightRadius:6}}>
                            <Image source={require('../icon/gopay.png')} />
                            <Text style={{fontSize: 17, color:'white', marginRight:12, fontWeight:'bold'}}>Rp 50.000.000</Text>
                        </View>

                        {/* icon bawah */}
                        <View style={{flexDirection:'row', padding:14, backgroundColor:'#2F65BD',
                                      borderBottomRightRadius: 6, borderBottomLeftRadius:6}}> 
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/pay.png')}/>
                                <Text style={{fontSize:13, color:'white', marginTop:12}}>Pay</Text>
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/nearby.png')}/>
                                <Text style={{fontSize:13, color:'white', marginTop:12}}>Nearby</Text>
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/topup.png')}/>
                                <Text style={{fontSize:13, color:'white', marginTop:12}}>Top Up</Text>
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/more.png')}/>
                                <Text style={{fontSize:13, color:'white', marginTop:12}}>More</Text>
                            </View>
                        </View>
                    </View>
                    {/* end of gopay */}

                    {/* mainFeature */}
                    <View style={{flexDirection:"row", flexWrap:'wrap', marginTop:18}}>
                        {/* atas */}
                        <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-ride.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-RIDE</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-car.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-CAR</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-bluebird.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-BLUEBIRD</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-send.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-SEND</Text>
                            </View>
                        </View>

                        {/* bawah */}
                        <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginTop:22}}>
                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-deals.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-DEALS</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-pulsa.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-PULSA</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-food.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-FOOD</Text>
                            </View>

                            <View style={{width:'25%', alignItems:'center'}}>
                                <View style={{height:58, width:58, borderWidth:1,
                                             borderColor:'#EFEFEF', borderRadius: 18,
                                             justifyContent:'center', alignItems:'center'}}>
                                <Image style={{width: 40, height: 40}} source={require('../icon/go-more.png')}/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>MORE</Text>
                            </View>
                        </View>

                    </View>
                    {/* end Of mainFeature */}
                    <View style={{height:17, backgroundColor:'#F2F2F4', marginTop:20}}></View>
                    {/* New Section */}
                    <View style={{padding:16}}>
                        {/* image banner */}
                        <View style={{position:'relative'}}>
                            <Image style={{height:170, width:'100%', borderRadius:7}} source={require('../dummy/sepak-bola.jpg')}/>
                            <View style={{height:'100%', width:'100%', position:'absolute', top:0, left:0 , backgroundColor:'black', opacity:0.2, borderRadius:7}}/>
                            <View style={{height:15, width:55, position:'absolute', top:16, left:16}}>
                                <Image style={{width:undefined, height:undefined, resizeMode:'contain', flex: 1}} source={require('../logo/white.png')}/>
                            </View>
                    
                        </View>
                        {/* image title + desc */}
                        <View style={{marginTop:16, paddingBottom:20, borderBottomColor:'#E8E9ED', borderBottomWidth:1}}>
                            <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>GO-NEWS</Text>
                            <Text style={{marginTop:4, fontSize:14, fontWeight:'normal', color:'#7A7A7A'}}>Dimas Drajat selamatkan penalti, Timnas U-23 Kalahkan Brunei </Text>
                            <TouchableOpacity style={{backgroundColor:'#61A756', alignSelf:'flex-end', marginTop:11, padding:12, borderRadius:4}}>
                                <Text style={{fontSize:13, color:'white', textAlign:'center'}}>READ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* End New Section */}
                    {/* Internal Information Section*/}
                    <View style={{padding:16}}>
                        <View style={{height:15, width:55, marginLeft:-4}}>
                            <Image style={{width:undefined, height:undefined, resizeMode:'contain', flex: 1}} source={require('../logo/gojek.png')}/>
                        </View>
                        <Text style={{marginTop:8, fontSize:17, fontWeight:'bold'}}>Complete your profile</Text>
                        <View style={{flexDirection:'row', marginTop:16}}>
                            <View>
                                <Image source={require('../dummy/facebook-connect.png')}/>
                            </View>
                            <View style={{flex:1, marginLeft:16}}>
                                <Text style={{fontSize:15, fontWeight:'bold', color:'#4A4A4A'}}>Connect With Facebook</Text>
                                <Text style={{fontSize:15, width:'70%', fontWeight:'normal', color:'#4A4A4A'}}>login faster without verification code</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#61A756', alignSelf:'flex-end', marginTop:11, padding:12, borderRadius:4}}>
                                <Text style={{fontSize:13, color:'white', textAlign:'center'}}>Connect</Text>
                        </TouchableOpacity>
                        <View style={{height:2, backgroundColor:'#F2F2F4', marginTop:20}}></View>
                    </View>

                    {/* GO-FOOD BANNER SECTION */}
                    <View style={{padding:16,  borderBottomColor:'#E8E9ED', borderBottomWidth:1, marginBottom:16}}>
                        <View style={{position:'relative'}}>
                            <Image style={{height:170, width:'100%', borderRadius:7}} source={require('../dummy/food-banner.jpg')}/>
                            <View style={{height:'100%', width:'100%', position:'absolute', top:0, left:0 , backgroundColor:'black', opacity:0.1, borderRadius:7}}/>
                            <View style={{height:15, width:55, position:'absolute', top:16, left:16}}>
                                <Image style={{width:undefined, height:undefined, resizeMode:'contain', flex: 1}} source={require('../logo/white.png')}/>
                            </View>
                            <View style={{position:'absolute', bottom:0, left: 0, width:'100%', flexDirection:'row', alignItems:'center'}}>
                                {/* untuk text bawah */}
                                <View style={{marginLeft:16}}>
                                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Free GO-FOOD voucher</Text>
                                    <Text style={{fontSize:12, fontWeight:'400', color:'white', marginTop:8}}>Quick, before they run </Text>
                                </View>
                                {/* untuk Button */}
                                <View style={{marginBottom:8, marginRight:8, flex:1}}>
                                    <TouchableOpacity style={{backgroundColor:'#61A756', alignSelf:'flex-end', marginTop:11, padding:12, borderRadius:4}}>
                                        <Text style={{fontSize:13, color:'white', textAlign:'center'}}>GOFOOD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Nearby Gofood */}
                    <View style={{padding:16}}>
                        <View style={{height:15, width:55}}>
                            <Image style={{width:undefined, height:undefined, resizeMode:'contain', flex: 1}} source={require('../logo/go-food.png')}/>
                        </View>
                        <View style={{flexDirection:"row", flex:1, justifyContent:'space-between', marginTop:8}}>
                            <Text style={{fontSize:22, fontWeight:'bold', color:'#4A4A4A'}}>Nearby Restaurants</Text>
                            <Text style={{fontSize:22, color:'#61A756'}}> See All</Text>
                        </View>
                        {/* <SafeAreaView > */}
                            <FlatList style={{marginTop:8}}
                                data={GofoodNearBy}
                                horizontal={true}
                                renderItem={({ item }) => <GofoodViewHolder title={item.title} source={item.source} />}
                                keyExtractor= {item => item.id}
                            />
                        {/* </SafeAreaView> */}
                    </View>
                </ScrollView>
                {/* bottomNavBar */}
                <View style={{height:54, backgroundColor:"white", flexDirection:"row"}}>
                    <BottomMenu title={'Home'} source={require('../icon/home-active.png')} />
                    <BottomMenu title={'Order'} source={require('../icon/order.png')} />
                    <BottomMenu title={'Help'} source={require('../icon/help.png')} />
                    <BottomMenu title={'Inbox'} source={require('../icon/inbox.png')} />
                    <BottomMenu title={'Account'} source={require('../icon/account.png')} />
                </View>
            </View>
        );
    }
}

const GofoodNearBy = [
    {
      id: '1',
      title: 'Bakmi GM',
      source: require('../dummy/go-food-gm.jpg'),
    },
    {
      id: '2',
      title: 'KFC',
      source: require('../dummy/go-food-kfc.jpg'),
    },
    {
      id: '3',
      title: 'Orins',
      source: require('../dummy/go-food-orins.jpg'),
    },
    {
        id: '4',
        title: 'Pak Bos',
        source: require('../dummy/go-food-pak-boss.jpg'),
      },
  ];

const BottomMenu = props =>(
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Image style={{width: 26, height: 26}} source={props.source}/>
        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>{props.title}</Text>
    </View>
)

const GofoodViewHolder = props =>(
    <View style={{marginRight:12}}>
        <View>
            <Image style={{width:150, height:150, borderRadius:8}} source={props.source}/>
        </View>
        <Text style={{marginTop:8, fontSize:16, fontWeight:'bold'}}>{props.title}</Text>
    </View>
)

const style = StyleSheet.create({

});