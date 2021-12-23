import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { Separator } from '../components/Separator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
  }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={styles.box}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}

        renderItem={({ item }) => <Text style={{ color: 'black' }}>{item}</Text>}
        stickySectionHeadersEnabled

        ListHeaderComponent={() => <HeaderTitle title={'Section List'} />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 50 }}>
            <HeaderTitle title={'Total: ' + casas.length} />
          </View>
        )}

        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}

        SectionSeparatorComponent={() => <Separator />}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    margin: 20
  }
});