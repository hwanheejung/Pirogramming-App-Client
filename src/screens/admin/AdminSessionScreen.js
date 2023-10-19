import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {ProgressBar, RowView} from '../HomeScreen';
import {StyledSubText, StyledText} from '../../components/Text';
import StyledContainer from '../../components/StyledContainer';
import {Box} from '../../components/Box';
import {COLORS} from '../../assets/Theme';
import HeaderDetail from '../../components/Header';
import {MainButton} from '../../components/Button';
import useUserInfo from '../../use-userInfo';
import {dayOfWeek, fetchPost, getData, getLocal} from '../../utils';
import useProgress from '../../use-progress';
import IsFaceBox from '../../components/IsFaceBox';
import Gap, {GapH} from '../../components/Gap';
import useClientTime from '../../use-clientTime';
import OnAirCircle from '../../components/OnAirCircle';
import StatusCircle from '../../components/StatusCircle';

const StatusLine = () => {
  return (
    <View style={{backgroundColor: `${COLORS.icon_gray}`, width: 1, flex: 1}} />
  );
};

const InProgressAsgBox = props => {
  const {renderMonth, renderDate, renderDay, renderHour, renderMinute} =
    useClientTime(props.item.date);

  return (
    <Pressable
      onLongPress={() => props.onLongPressDelete(props.item.session_id)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <StatusLine />
            {props.nextSessionId === props.item.session_id ? (
              <OnAirCircle />
            ) : (
              <StatusCircle />
            )}
          <StatusLine />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Box>
          <View style={{paddingHorizontal: 17, paddingVertical: 10}}>
            <RowView style={{marginBottom: 10}}>
              <StyledSubText
                content={`${renderMonth}.${renderDate} ${renderDay}`}
              />
              <IsFaceBox isFace={props.item.is_face} />
            </RowView>
            <StyledText content={props.item.title} fontSize={20} />
            <Gap height={14} />
            {props.item.is_face == 1 ? (
              <>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/images/location_icon.png')}
                    style={{width: 15, height: 15}}
                    resizeMode="contain"
                  />
                  <GapH width={9} />
                  <View style={{paddingRight: 30}}>
                  <StyledSubText content={props.item.location} />
                  </View>
                </View>
                <Gap height={5} />
              </>
            ) : null}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/time_icon.png')}
                style={{width: 15, height: 15}}
                resizeMode="contain"
              />
              <GapH width={9} />
              <StyledSubText content={`${renderHour}:${renderMinute}`} />
            </View>
          </View>
        </Box>
      </View>
    </Pressable>
  );
};
const DoneAsgBox = ({item}) => {
  const {renderMonth, renderDate, renderDay} = useClientTime(item.date);
  return (
    <Pressable
      onLongPress={() => props.onLongPressDelete(item.session_id)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <StatusLine />
          <StatusCircle />
          <StatusLine />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{padding: 20}}>
          <RowView style={{marginVertical: 10}}>
            <View style={{alignItems: 'center'}}>
              <StyledSubText
                content={`${renderMonth}.${renderDate}`}
                fontSize={20}
              />
              <StyledSubText content={`${renderDay}`} fontSize={20} />
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <StyledText content={item.title} fontSize={20} />
            </View>
          </RowView>
        </View>
      </View>
    </Pressable>
  );
};
const Item = props => {
  const comming = props.item.cnt <= props.initialScrollIndex;
  return (
    <>
      {comming ? (
        <InProgressAsgBox
          nextSessionId={props.nextSessionId}
          item={props.item}
          onLongPressDelete={props.onLongPressDelete}
        />
      ) : (
        <DoneAsgBox
          item={props.item}
          onLongPressDelete={props.onLongPressDelete} />
      )}
    </>
  );
};

const AssignmentScreen = ({navigation}) => {
  const [sessionData, setSessionData] = useState([]);
  const [initialScrollIndex, setInitialScrollIndex] = useState(0);
  const [nextSessionId, setNextSessionId] = useState(0);
  const isFocused = useIsFocused();

  const findNextSession = (sessions) => {
    const now = new Date();
    for(let i = 0; i < sessions.length; i++) {
      const sessionDate = new Date(sessions[i].date);
      if(sessionDate < now) {
        setNextSessionId(sessions[i-1].session_id);
        setInitialScrollIndex(sessions[i-1].cnt);
        break;
      }
    }
  }

  const getSessions = async () => {
    const userToken = await getData('user_token'); // token 받아올 땐 fetch랑 같이...
    const url = '/session/getSessions';
    const body = {
      userToken: userToken,
    };
    const res = await fetchPost(url, body);

    setSessionData(res.sessions);
    findNextSession(res.sessions);
  };

  useEffect(() => {
    getSessions();
  }, [isFocused]);

  const onPressAddSchedule = () => {
    navigation.navigate('AdminAddSessionScreen');
  };

  // need to be changed [wonchae]
  // const getItemLayout = (data, index) => {
  //   return {
  //     length: 100,
  //     offset: 100 * data.length,
  //     index,
  //   };
  // };

const onLongPressDelete = session_id => {
  Alert.alert(
    '일정을 삭제하시겠습니까?',
    '일정과 관련된 출석 정보가 모두 삭제 됩니다',
    [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: async () => {
          const userToken = await getData('user_token');
          const url = '/session/deleteSchedule';
          const body = {
            userToken: userToken,
            session_id: session_id,
          };
          await fetchPost(url, body);
          await getSessions();
        },
      },
    ],
  );
};

  return (
    <StyledContainer>
      <HeaderDetail title={'세션'} />
      <View style={{flex: 1}}>
        <FlatList
          style={{paddingRight: 20, paddingLeft: 10}}
          data={sessionData}
          renderItem={({item}) => (
            <Item
              item={item}
              initialScrollIndex={initialScrollIndex}
              nextSessionId={nextSessionId}
              onLongPressDelete={onLongPressDelete}
            />
          )}
          keyExtractor={item => item.session_id}
          // getItemLayout={getItemLayout}
          // initialScrollIndex={initialScrollIndex}
        />
        <View style={{paddingHorizontal: 20}}>
          <MainButton
            content="일정 추가하기"
            onPress={onPressAddSchedule}
            height={60}
          />
        </View>
      </View>
    </StyledContainer>
  );
};

export default AssignmentScreen;
