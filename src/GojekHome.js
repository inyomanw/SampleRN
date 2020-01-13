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
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class GojekHome extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={{flex : 1}}>
                <View style={{backgroundColor:"white", flex : 1}}>
                    {/* searchBar */}
                    <View style={{marginHorizontal:17, marginTop:12, flexDirection:"row"}}>
                        <View style={{
                            position:"relative",
                            marginHorizontal:17,
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
                            <Text style={{fontSize: 17, color:'white', marginRight:12, fontWeight:'bold'}}>Rp 50.000</Text>
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
                </View>


                {/* bottomNavBar */}
                <View style={{height:54, backgroundColor:"white", flexDirection:"row"}}>
                    <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                        <Image style={{width: 26, height: 26}} source={require('../icon/home-active.png')}/>
                        <Text style={{fontSize:10, color:'#43AB4A', marginTop:4}}>Home</Text>
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Image style={{width: 26, height: 26}} source={require('../icon/order.png')}/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Order</Text>
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Image style={{width: 26, height: 26}} source={require('../icon/help.png')}/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Help</Text>
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Image style={{width: 26, height: 26}} source={require('../icon/inbox.png')}/>
                        <Text style={{fontSize:10, color:'#545454'}}>Inbox</Text>
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Image style={{width: 26, height: 26}} source={require('../icon/account.png')}/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Account</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({

});