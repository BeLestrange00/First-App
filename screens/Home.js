import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS } from '../constants'

const Home = ({ navigation }) => {

    const initialCurrentLocation = {
        streetName: "7 Glen Alan Close",
        gps: {
            latitude: -29.8924205511986,
            longitude: 30.917993877464795
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Baby",
            icon: icons.baby,
        },
        {
            id: 2,
            name: "Beauty",
            icon: icons.beauty,
        },
        {
            id: 3,
            name: "Electrical",
            icon: icons.electrical,
        },
        {
            id: 4,
            name: "Fitness",
            icon: icons.fitness,
        },
        {
            id: 5,
            name: "Health",
            icon: icons.health,
        },
        {
            id: 6,
            name: "Houshold",
            icon: icons.houshold,
        },
        {
            id: 7,
            name: "Personal Care",
            icon: icons.personalcare,
        },


    ]

    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const ShopData = [
        {
            id: 1,
            name: "Alpha Pharm",
            rating: 4.8,
            categories: [5, 7, 6],
            priceRating: affordable,
            photo: images.alphapharm,
            duration: "30 - 45 min",
            location: {
                latitude: -29.87997654187733,
                longitude: 30.919506115343268,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessica"
            },
            product: [
                {
                    productId: 1,
                    name: "Benylin Wet Cough Mucus 200ml",
                    photo: images.benylin,
                    description: "Benylin Wet Cough Mucus Relief 200ml helps relieve chesty coughs by thinning and loosening up mucus on the chest. Suitable for persons aged 2 years and older.",
                    price: 65
                },
                {
                    productId: 2,
                    name: "Head & Shoulders Shampoo 400ml",
                    photo: images.headnshoulders,
                    description: "Head & Shoulders Anti-Dandruff Shampoo Citrus Fresh 400ml is specially blended to clean and refresh greasy hair.",
                    price: 70
                },
                {
                    productId: 3,
                    name: "Softi 2ply 18's P",
                    photo: images.toiletrolls,
                    description: "Soft and absorbent toilet tissues.",
                    price: 80
                }
            ]
        },
        {
            id: 2,
            name: "Clicks",
            rating: 4.8,
            categories: [3, 2, 1],
            priceRating: expensive,
            photo: images.clicks,
            duration: "15 - 20 min",
            location: {
                latitude: -29.880273226644377,
                longitude: 30.917199112856153,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Adam"
            },
            product: [
                {
                    productId: 4,
                    name: "Wahl Professional Hairdryer 2000W",
                    photo: images.hairdryer,
                    description: "Wahl Professional Cutek Hairdryer 2000W uses integrated tourmaline technology to reduce static and leave hair looking healthy and cared for.",
                    price: 390
                },
                {
                    productId: 5,
                    name: "Clinique Even Better SPF15 Makeup Vanilla 30ml",
                    photo: images.mUp,
                    description: "For all ethnicities. Broad spectrum SPF helps protect against future darkening.",
                    price: 540
                },
                {
                    productId: 6,
                    name: "Pampers Premium Care 36 Nappies Size 6",
                    photo: images.pampers,
                    description: "It is designed with tear sides for easy changes. Up to 12 hours of dryness. 13kg+.",
                    price: 265
                },
                {
                    productId: 7,
                    name: "Johnson's Baby Aqueous Cream Lightly Fragranced 350ml",
                    photo: images.Johnson,
                    description: "Baby Aqueous Cream Fragrance Free 350ml provides gentle and effective cleansing and moisturisation for your little ones delicate skin.",
                    price: 37
                }
            ]
        },
        {
            id: 3,
            name: "Dischem",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.dischem,
            duration: "20 - 25 min",
            location: {
                latitude: -29.91299988842953,
                longitude: 30.8803593480139,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Taydin"
            },
            product: [
                {
                    productId: 8,
                    name: "NPL Pro Gains 4kg",
                    photo: images.npl,
                    description: "Pro Gains contains 7 high quality multi-stage release proteins for fast, medium and slow release of protein and amino acids.",
                    price: 700
                }
            ]
        },
        {
            id: 4,
            name: "Medi-Rite",
            rating: 4.8,
            categories: [5],
            priceRating: expensive,
            photo: images.medirite,
            duration: "10 - 15 min",
            location: {
                latitude: -29.91271160105633,
                longitude: 30.882730420729313,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            product: [
                {
                    productId: 9,
                    name: "Cal-C-Vita Combo 30 Effervescent Tablets",
                    photo: images.calc,
                    description: "Provides you with 1000 mg of vitamin C combined with other vitamins and minerals to supplement your diet in order to assist in building the immune system. ",
                    price: 220
                }
            ]
        },
        {
            id: 5,
            name: "Sparkport",
            rating: 4.8,
            categories: [2, 3, 5],
            priceRating: fairPrice,
            photo: images.sparkport,
            duration: "15 - 20 min",
            location: {
                latitude: -29.91182813453039,
                longitude: 30.884329017266435,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            product: [
                {
                    productId: 10,
                    name: "Vaseline Men Face Wash 100ml",
                    photo: images.vase,
                    description: "Vaseline Face Wash Deep Cleanse 100ml not only deeply cleanses skin to remove impurities and excess oils, it also hydrates to leave it moisturised and refreshed.",
                    price: 65
                },
                {
                    productId: 11,
                    name: "Carmen Straightener Wet & Dry Pink",
                    photo: images.Carmen,
                    description: "Carmen Straightener Wet & Dry Pink",
                    price: 140
                },
                {
                    productId: 12,
                    name: "Panado Capsules 20's",
                    photo: images.pando,
                    description: "For the relief of mild to moderate pain and fever such as headaches, toothache and pain associated with colds and ﬂu.",
                    price: 40
                },
                {
                    productId: 13,
                    name: "Turbovite Excel 20 Sachets",
                    photo: images.Turbovite,
                    description: "A supplement with active ingredients indicated for improved energy.",
                    price: 90
                },

            ]
        },


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [Shops, setShops] = React.useState(ShopData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        let ShopList = ShopData.filter(a => a.categories.includes(category.id))

        setShops(ShopList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={styles.h3}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
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

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={
                            styles.body5,
                            {
                                marginTop: SIZES.padding,
                                color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            }

                        }
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={styles.h1}>Main Categories</Text>


                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `R{item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderShopList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Shop", {
                    item,
                    currentLocation
                })}
            >
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={styles.h4}>{item.duration}</Text>
                    </View>
                </View>

                <Text style={styles.body2}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={styles.body3}>{item.rating}</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={styles.body3, { color: COLORS.darkgray }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={styles.h3, { color: COLORS.darkgray }}> ● </Text>
                                    </View>
                                )
                            })
                        }

                        {
                            [1].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={styles.body1, {
                                        color: (priceRating <= item.priceRating) ? COLORS.darkgray:COLORS.black 
                                    }}
                                >R</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={Shops}
                keyExtractor={item => `R{item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderShopList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
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

export default Home;