import React, { useState } from 'react';
import {
  StyleSheet,SafeAreaView,View,ScrollView,Text,TouchableOpacity,Switch,} from 'react-native';
import {Icon,Image} from '@rneui/themed';

export default function () {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://w.forfun.com/fetch/c1/c10c301b50a6d9f50f1a49dbbc0ab69b.jpeg',
                }}
                style={styles.profileAvatar} />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <Icon
                    color="black"
                    type='material'
                    name="edit"
                    size={27} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>Scarlett Johansson</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" name="target" type='foundation' size={28} />
              </View>

              <Text style={styles.rowLabel}>My Goals</Text>

              <View style={styles.rowSpacer} />

              <Icon
                color="#EEF0F2"
                name="chevron-right"
                size={28} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" name="moon" type='ionicon' size={28} />
              </View>

              <Text style={styles.rowLabel}>Dark Mode</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={darkMode => setForm({ ...form, darkMode })}
                value={form.darkMode} />
            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon
                  color="#29426B"
                  name="password"
                  size={28} />
              </View>

              <Text style={styles.rowLabel}>Change Password</Text>

              <View style={styles.rowSpacer} />

            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" 
                type="material" 
                name="notifications" 
                size={28} />
              </View>

              <Text style={styles.rowLabel}>Push Notifications</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={pushNotifications =>
                  setForm({ ...form, pushNotifications })
                }
                value={form.pushNotifications} />
            </View>
          </View>

          <View style={styles.section}>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" name="flag" size={28} />
              </View>

              <Text style={styles.rowLabel}>Report Bug</Text>

              <View style={styles.rowSpacer} />

              <Icon
                color="#EEF0F2"
                name="chevron-right"
                size={28} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" name="mail" size={28} />
              </View>

              <Text style={styles.rowLabel}>Contact Us</Text>

              <View style={styles.rowSpacer} />

              <Icon
                color="#EEF0F2"
                name="chevron-right"
                size={28} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon color="#29426B" name="star" size={28} />
              </View>

              <Text style={styles.rowLabel}>Rate Us</Text>

              <View style={styles.rowSpacer} />

              <Icon
                color="#EEF0F2"
                name="chevron-right"
                size={28} />
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#EEF0F2' }]}>
                <Icon
                  color="#29426B"
                  name="logout"
                  type='material'
                  size={28} />
              </View>

              <Text style={styles.rowLabel}>Log Out</Text>

              <View style={styles.rowSpacer} />

              <Icon
                color="#EEF0F2"
                name="chevron-right"
                size={28} />
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
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 145,
    height: 145,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    left: '40%',
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 9999,
    backgroundColor: '#EEF0F2',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
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
    height: 60,
    backgroundColor: 'rgba(39, 39, 39, 1)',
    borderRadius: 25,
    marginBottom: '4%',
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
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
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