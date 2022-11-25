export default {
  type: 'bubble',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: []
  },
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '18:11',
    aspectMode: 'fit',
    action: {
      type: 'uri',
      uri: ''
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
                text: '是否絕育'
              },
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '認養狀態:',
                color: '#888888'
              },
              {
                type: 'text',
                text: '已開放',
                wrap: true,
                margin: 'none',
                size: 'md'
              },
              {
                type: 'text',
                text: '2022-11-23',
                wrap: true,
                size: 'md'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
                text: '我在'
              },
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '地址',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '10:00 - 23:00',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'separator',
                margin: 'lg',
                color: '#FF7F50'
              },
              {
                type: 'text',
                text: '藍胸背，雙耳嚴重發炎耳膿，< 收容編號111072903將於111.11.4(五)開放認養 > 欲認養者，請於早上10:00-10:10，攜帶身分證件(需年滿20歲且無棄養紀錄或違反動保法等)至臨櫃登記，完成登記者，始得參與認養，若登記人數為兩位以上（含），將進行抽籤程序。 註：中籤者攜帶動物離開時，請自備犬隻專用牽繩或胸背帶、運輸籠等。',
                wrap: true
              },
              {
                type: 'separator',
                margin: 'sm',
                color: '#FF7F50'
              }
            ]
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'postback',
          label: '複製我的資訊',
          data: 'action=&itemid=111',
          // displayText: '複製詳細資訊',
          inputOption: 'openKeyboard',
          fillInText: ''
        }
      }
      // ,
      // {
      //   type: 'button',
      //   style: 'link',
      //   height: 'sm',
      //   action: {
      //     type: 'uri',
      //     label: '我的網站',
      //     uri: ''
      //   }
      // }
    ],
    flex: 0
  }
}

// https://asms.coa.gov.tw/Amlapp/App/AnnounceList.aspx?Id=282171&AcceptNum=1111103C10&PageType=Adopt
