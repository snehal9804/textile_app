import React from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeIcon from '../component/HomeIcon';
import HomeSearch from '../component/HomeSearch';
import HomeBanner from '../component/HomeBanner';
import Products from '../component/Products';
import ProductTitle from '../component/ProductTitle';
import { ScrollView } from 'react-native';
import { fabrics, readytowear, Saree } from '../utilities/description';


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>
        <View style={{ gap: 10, paddingBottom: 20 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductTitle title='FABRICS:' />
          <Products data={fabrics} />
          <ProductTitle title='HANDLOOM SAREE:' />
          <Products data={Saree} />
          <ProductTitle title='READY TO WEAR:' />
          <Products data={readytowear} />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}