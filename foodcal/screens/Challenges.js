import React, { useState } from 'react';
import {
  StyleSheet,SafeAreaView,View,ScrollView,Text,TouchableOpacity,Switch,} from 'react-native';
import {Icon,Image} from '@rneui/themed';

export default function Challenges() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
    
        <ScrollView>
          <View style={styles.section}>

            <TouchableOpacity
              onPress={() => {
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: 'white' }]}>
                <Icon color="#29426B" name="cup-water" type='material-community' size={28} />
              </View>

              <Text style={styles.rowLabel}>Daily 12 Glasses of Water</Text>

              <View style={styles.rowSpacer} />

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: 'white' }]}>
                <Icon color="#29426B" name="fire" type='font-awesome-5' size={28} />
              </View>

              <Text style={styles.rowLabel}>30 Days Calorie Deficit</Text>

              <View style={styles.rowSpacer} />

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: 'white' }]}>
                <Icon color="#29426B" name="fire" type='fontisto' size={28} />
              </View>

              <Text style={styles.rowLabel}>30 Days Calorie Surplus</Text>

              <View style={styles.rowSpacer} />
             
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
       {/* Bottom Navigation */}
       <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => handleNavigate('Community')}>
          <Icon name="heart-fill" type="octicon"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Camera')}>
          <Icon name="camera" type="fontisto" size={38}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Profile')}>
          <Icon name="person" type="ionicon" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 75,
    backgroundColor: '#EEF0F2',
    borderRadius: 25,
    marginBottom: '5%',
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
   bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fafaff',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    borderRadius: 12,
    position: 'absolute',
    bottom: '1.5%',
    left: '5%',
    right: '5%',
  },
});