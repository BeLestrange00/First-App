import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Alert
} from "react-native";

import { icons, COLORS, SIZES} from '../constants'

const shop = ({ route, navigation }) => {

    const buttonAlert = () =>
    Alert.alert(
    "Are you sure?",
    "Press OK to process your order",
      [
        {
          text: "Cancel",
          onPress: () => navigation.navigate("Home"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("Order", {
            shop: shop,
            currentLocation: currentLocation
        }) }
      ],
      { cancelable: false }
    );


    const scrollX = new Animated.Value(0);
    const [shop, setshop] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

    React.useEffect(() => {
        let { item, currentLocation } = route.params;

        setshop(item)
        setCurrentLocation(currentLocation)
    })

    function editOrder(action, productId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.productId == productId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    productId: productId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(productId) {
        let orderItem = orderItems.filter(a => a.productId == productId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        paddingTop: 40,
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        paddingTop: 20,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            paddingTop: 10,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={ styles.h3 }>{shop?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        paddingTop: 25,
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderproductsInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >
                {
                    shop?.product.map((item, index) => (
                        <View
                            key={`product-R{index}`}
                            style={{ alignItems: 'center' }}
                        >
                            <View style={{ height: SIZES.height * 0.35 }}>
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />

                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        onPress={() => editOrder("-", item.productId, item.price)}
                                    >
                                        <Text style={styles.body1 }>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={styles.h2 }>{getOrderQty(item.productId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        onPress={() => editOrder("+", item.productId, item.price)}
                                    >
                                        <Text style={ styles.body1 }>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 15, textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>{item.name} - {item.price.toFixed(2)}</Text>
                                <Text style={styles.body4 }>{item.description}</Text>
                            </View>

                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View style={{ height: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding
                    }}
                >
                    {shop?.product.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-R{index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    function renderOrder() {
        return (
            <View>
                {
                    renderDots()
                }
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={styles.h3 }>{getBasketItemCount()} items in Cart</Text>
                        <Text style={styles.h3 }>R{sumOrder()}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={styles.h4 ,{ marginLeft: SIZES.padding}}>Location</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.master_card}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={ styles.h4 ,{ marginLeft: SIZES.padding}}>4692</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            
                            onPress={buttonAlert}
                        >
                            <Text style={styles.h2 ,{ color: COLORS.white}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>

               
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderproductsInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    
    h1: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: 'normal'
    },
    h2: {
        fontSize: 22,
        lineHeight: 33,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 20,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    h4: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    body1: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: 'normal'
    },
    body2: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'normal'
    },
    body3: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'normal'
    },
    body4: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'normal'
    },
    body5: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: 'normal'
    },
})

export default shop;