import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {StyledSubText, StyledText} from '../components/Text';
import {RowView} from '../screens/HomeScreen';
import {GapH} from '../components/Gap';
import {COLORS} from '../assets/Theme';
import styled from 'styled-components';

export default function HistoryElement({history}) {
  return (
    <HistoryElementBox>
      <RowView>
        <StyledSubText content={`${history.monthDay}`} />
        {/* <StyledSubText content={`03.04`} /> */}
        <GapH />
        <StyledText content={`${history.type}`} fontSize={18} />
      </RowView>
      <View style={{alignItems: 'flex-end'}}>
        <StyledText
          content={
            history.price <0 
              ? `${history.price.toLocaleString('en')}원 잔액 : ${history.balance}원`
              : history.price == 120000 
                ?`+${history.price.toLocaleString('en')}원 잔액 : 120000원`
                : `+${history.price.toLocaleString('en')}원 잔액 : ${history.balance}원`
            }
          fontSize={18}
          weight={600}
          color={history.price < 0 ? 'white' : COLORS.green}
        />
        {/* 잔액 */}
        {/* <StyledSubText content={'11,0000원'} /> */}
      </View>
    </HistoryElementBox>
  );
}

const HistoryElementBox = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding: 30px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.icon_gray};
  /* background-color: white; */
`;
