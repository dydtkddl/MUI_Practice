# 반응형 웹페이지에서 사용되는 레이아웃들 5가지
반응형 웹페이지에서 사용하는 레이아웃은 5가지로 크게 나눌수있다(by Google)
- 유동형(Mostly fluid)
- 열 드롭(Column drop)
- 레이아웃 시프터(Layout shifter)
- 작은 변화(Tiny tweaks)
- 캔버스 오프(Off canvas)
먼저 Mostly Fluid 유동형 패턴은 주로 유동형 격자(grid)로 구성된다. 대형 혹은 중간크기의 스크린에서 이 패턴은 보통 같은 크기로 간주된다. 더 넓은 화면에서는 여백정도만 조정된다. 더 작은 스크린에서는 이 패턴은 열들이 수직으로 쌓이면서 컨텐츠가 재배치된다. 이 패턴의 중요한 장점은 작은 화면과 큰 화면사이에 단 하나의 중단점만 있으면 된다는 것이다.

Column Drop 열 드롭은 전체 폭이 가득찬 다중 열 레이아웃을 위해서 화면이 각 열이 컨텐츠에 비해 너무 좁아지면 열들이 수직으로 떨어지며 하나씩 쌓이게 된다. 결국 모든 열이 수직으로 쌓이게 된다. 이 패턴에서 중단점(breakpoints)은 컨텐츠에 따라 선택할 수 있고 디자인에 따라 변할 수 있다.

Layout Shifter는 너비가 변할때 아예 컨텐츠를 이동시키는 방식이다; 레이아웃 시프터 패턴은 여러개의 중단점(breakpoints)를 두어 여러 스크린의 너비에 가장 민감하게 반응하는 패턴이다. 이 패턴의 핵심은 열을 흘려보내고 떨어뜨리는 방식 대신에 컨텐츠를 이동시키는 방법이라는 것이다. 중단점(breakpoints)사이에 차이점이 매우 크기 때문에 레이아웃 유지가 어렵고 전체 레이아웃 뿐 아니라 요소안의 변화도 수반될 수 있다.

Tiny tweaks 작은변화는 말 그대로 글꼴크기나 이미지 크기를 조정하거나 매우 사소한 방법으로 컨텐츠를 이동시키는 등의 레이아웃의 작은 변화만 이루어진다. 이 패턴은 일직선의 one page웹사이트와 같은 단일 열 레이아웃에서 잘 작동한다.

마지막으로 off Canvas는  수직으로 컨텐츠를 쌓기보다는 우선 자주 사용하는 컨텐츠만을 배치한 후 네비게이션이나 매뉴와 같은 요소를 충분히 큰 사이즈의 스크린에서만 보여주고 더 작은 스크린에서는 오직 클릭했을 경우에만 보여준다. 예를들어 텐츠를 수직으로 쌓기 보다는 두 개의 div들을 transform:translate(-250px, 0) 을 사용하여 스크린 밖으로 숨긴다. open 클래스를 추가하여 Javascript로 div들이 나타날 수 있게 한다. 스크린이 더 넓어지면 화면 밖으로 밀어낸 포지션 값을 제거함으로서 화면안에 보여지게 된다.
# Container 컴포넌트에 대한 이해
컨테이너 컴포넌트를 이해하는 것은 반응형 적응형 레이아웃을 만들수 있게 해준다.

MUI container컴포넌트는 반응형 웹페이지를 만드는 과정을 간소화해주는 MUI의 기초이다. 
container 컴포넌트는 다음의 요소를 관리함으로써 반응형 레이아웃을 만드는 것을 간단하게 만들어준다.
* Content Alignment
* Structure
* Default Styling
* Responsive Behavior

MUI container는 기본값으로 Fluid Container를 제공한다. Fluid Container는 웹상의 가로폭에 상관없이 항상 100%를 유지해준다는 것이다. 즉 사용자가 웹사이트를 축소한다고 하면, container의 크기가 그 축소비율만큼 같이 작아져서 변함없이 현재의 웹 가로폭의 100%를 차지하게 된다. 변화를 유체처럼 따라갈수 있는 것이다.
이러한 versatile한 기본 행동양식은 Container Component를 반응형 레이아웃을 구축하는데 적용하기 쉽게 만들어준다.
MUI에는 두가지 타입의 컨테이너가 있다. Fluid와 Fixed이다. (Container는 default) Fluid는 전체 스크린 너비를 점유하도록 디자인 되어져있다. Fixed컨테이너는 미리 정의된 스크린 breakPoint, maxWidth값에 따라 조정된다. 이 두가지 컨테이너 형식에 대한 이해를 잘 해놓으면 프로젝트의 레이아웃 요구사항에 딱맞는 컨테이너를 적재적소에 활용할 수 있다.

maxWidth 속성은 컨테이너 컴포넌트의 반응성을 컨트롤하는데 엄청나게 중요한 역할을 한다. maxWidth 속성을 조절하는 것은 fluid나 fixed width레이아웃을 만들수 있게 해주고, 원활하게 다른 스크린 사이즈에 적응할수 있게한다.
fixed컨테이너의 최대 너비는 현재의 breakPoint의 minimum 너비값에 따른다. 그리고 이것은 다양한 스크린 브레이크포인트의 고정사이즈를 세팅하는 것을 가능하게 해준다. 이것은 컨테이너 너비와 스크린사이즈를 고려함으로써 fixed container를 특정 스크린사이즈에 최적화된 반응형 레이아웃을 만드는데 이상적으로 만들어준다.
거꾸로, fluid container는 axWidth 속성을 100%값으로 가지고 있으며 , 언제나 container의 꽉찬 너비를 점유하게 만든다. 이러한 타입의 컨테이너는 꽉찬 너비의 엘리멘트에 최적이다 hero images같은

MUI 컨테이너 컴포넌트에 대한 이해를 갖춘상태에서 우리는 리액트 프로젝트에 그것을 바로 적용할 수있다. 
MUI 컨테이너 컴포넌트는 plethora아주많은 커스텀 옵션을 제공하기때문에, 니즈에 맞추어 세밀하게 표현할 수 있다. 먼저 fixed와 fluid컨테이너중에 고를수 있고, maxWidth프로퍼티를 조정하고, customStyle들을 적용할 수 있다.

컨테이너의 스타일링
컨테이너 컴포넌트에 커스텀 스타일을 추가하는 것은 sx프로퍼티나 CSS클래스를 이용하는 것으로 쉽게 끝난다. sx 프로퍼티는 다음과 같은 인자를 받을 수 있다.
Padding, Margin, BackgroundColor, Border
만약 CSS클래스를 쓰고싶다면 MUI웹사이트에 가서 사용가능한 클래스네임이나 커스텀 옵션을 따로 찾아보면된다. 글로벌 클래스이름이나 규칙이름을 사용하고 있는 컴포넌트의 스타일을 덮어씀으로써, 해당 컴포넌트의 스타일을 조정할 수 있다.

Nesting Conatiners : 네스팅 구조로 사용할 수 도 있는데 , 이런경우 더욱 복잡한 레이아웃을 구현할수 있다고한다.

컨테이너 컴포넌트에서 maxwidth를 설정하면, 그 설정값 이하에서는 웹 스크린의 100퍼센트를 차지하면서 100퍼센트를 유지하면서 커지거나 작아진다. 하지만 그 설정값 이상부터는 해당 컨테이너의 너비는 maxwidth값으로만 남아있고 더이상 100%를 차지하지 않는다. 사실상 마진을 포함하면 100퍼센트는 맞긴하다.

# Global Customization을 위해 ThemProvide쓰는 이유
Theme Provider컴포넌트는 설정한 theme를 전체 리액트 앱 컴포넌트에 일괄적용할 수 있게해준다. 컨테이너 컴포넌트를 ThemeProvider로 Encapslating하고 원하는 테마를 그 API로 흘려보내는 것은 전체 애플리케이션에 글로벌 커스텀을 적용할 수 있게한다.
Theme Provider를 글로벌 커스텀에 이용하는 것은 여러가지 이점이있다.
1. 전체 애플리케이션의 특정 컴포넌트를 각각 개별 인스턴스를 하나하나 수정하는 노고를 겪지않고 쉽게 수정할 수 있다.
2. 애플리케이션 전반 디자인의 업데이트와 유지보수를 간소화해준다
3. 지속적이고 통일화된 외관을 전체 페이지와 컴포넌트에 보장해준다.


# AppBar와 ToolBar의 차이
The main purpose of Toolbar is to display its children with an inline display (elements are placed next to each other), something Appbar doesn't do. The AppBar component uses display: flex and flex-direction: column, that means direct descendants are stacked on top of each other. On the other hand Toolbar uses display: flex too, but doesn't set flex-direction, which means it uses its default value: row. That being said, the Button component uses display: inline-block. That is the reason why elements are placed next to each other inside Toolbar components.

>AppBar는 네비게이션 바. display:flex이며 flex-direction : column이 정의되어있음. AppBar에 그대로 하위요소를 작성하면 하위요소들은 컬럼으로 정렬됌. 
>AppBar내에서 한 행의 요소를, 행을따라 이어붙히기 위해서는 ToolBar를 하위요소로 넣으면 됌. ToolBar는 display:flex이며 flex-direction이 정의되지 않아, default값인 flex-direction : row로 설정됌. 따라서 AppBar의 한 행을 따라 가로로 요소들을 이어붙힐수 있는 내부 태그가 되어줌


# Typography의 속성중 gutterbottom 과 paragraph에 대해서
둘은 똑같이 marginBottom을 설정해주는 키워드이지만, css값과 단위가 다르다. 
gutterBottom: {
    marginBottom: '0.35em',
},
paragraph: {
    marginBottom: 16,
},
이런식으로 각각 다르게 설정되어있다. 여기서 em이란 부모 요소의 font-size에 비례한다는 것이다.

# MUI의 여러가지 색상 키워드들
다음과 같이 MUI에서 제공하는 의미에 맞는 색상을 바로 받아올 수 있는 API를 활용하면 간단하게 코드를 작성하고 이해할수있다.
파란색 <Box sx={{ color: 'primary.main' }}>… 1번째 메인
보라색<Box sx={{ color: 'secondary.main' }}>… 2번째 메인
빨간색<Box sx={{ color: 'error.main' }}>… 에러
주황색<Box sx={{ color: 'warning.main' }}>… 경고
진한 파란색<Box sx={{ color: 'info.main' }}>… 알림
초록색<Box sx={{ color: 'success.main' }}>… 성공
짙은 검정<Box sx={{ color: 'text.primary' }}>… 텍스트 1번째
흐린 검정<Box sx={{ color: 'text.secondary' }}>… 텍스트 2번째
매우 흐린 검정<Box sx={{ color: 'text.disabled' }}>… 사용불가

# Grid 컴포넌트의 container요소에 넣는 spacing 속성에 대해
spacing속성은 기본적으로 각 요소의 열과 행간의 간격을 설정하게 해준다. 하지만 함께가 아닌 독립적으로 설정해주고 싶다면, RowSpacing과 ColumnSpacing을 이용하면 된다.


# MUI기본제공 theme을 이용하는 법
@mui/styles의 makeStyles를 사용할 때가 많다. 이때 mui에서 제공하는 theme을 불러와서 자주사용한다. 또는 theme을 커스텀해서 사용하곤 한다. 이때 mui에서 기본제공하는 theme을 사용하는 방법을 기록하자.
가장 먼저 theme을 생성해줘야한다. 그래서 사용할 가장 넓은 영역 ex index.js에서 theme을 생성해준다. createTheme을 불러와야해서 import {createTheme} from "@mui/materials"를 해준다.
그리고 const theme = createTheme();으로 기본제공 theme을 변수에 담는다.
또한 theme을 넘겨줄 ThemeProvider를 불러온다. import {ThemeProvider} from "@mui/styles"를 해주고, theme을 넘겨주어 <ThemeProvider theme = {theme}></ThemeProvider>를 <App/>요소에 감싸준다. 
그리고 사용하고자 하는데서 theme변수를 쉽게 사용하면 된다.

# Padding이나 Margin을 한줄에 적을때
기본적으로 Padding과 Margin은 한줄로적을때 시계방향으로 북 동 남 서 로 읽는다. 즉 Top, Right, Bottom, Left순으로 읽는다.
하지만 특별한 경우에는 2개나 3개로 줄여서 적을 수 있다.
1. 좌우가 같고 상하가 같을 때 (2개)
ex> padding : 2px 5px; 이면 상하가 2px 좌우가 5px로 같다는 것이다.
2. 좌우는 같은데 상하가 다를때 (3개)
ex> padding : 2px 5px 3px ;이면 좌우가 5px로 같고, 상과 하가 각각 2,3px이다.

# theme.spacint() 이용하기
mui의 createTheme으로 만들어 낸 theme에는 spacing 함수가 있다. 이는 미리 지정해둔 배열값을 인덱싱하는 것인데, 이 배열값은 margin이나 padding을 설정하는 값이된다. 이때 margin : theme.spacing(2)를 하면 미리정의한 배열의 2번째 배열의 값을 취한다는 것이다. margin : theme.spacing(1,5,3)을하면 padding이나 margin의 한줄표기법을 따라, 상 1 하 3 좌우 5가 된다. 1과 3,5는 각각 미리정의한 배열의 인덱싱 번호가 되어 값을 추출할거다.

# useStyle을 범용적으로 이용하기 위해서, styles.js라는 파일을 따로 만들어 css파일처럼 관리하기.
useStyle = makeStyles((theme)=>({...}))
이 문법을 사용하고 classes로 받아 컴포넌트 내에 className으로 넘겨주는 방식을 사용한다면, 이 useStyle을 글로벌하게 이용할 수 있도록 따로 파일을 만들어 관리하는 것이 좋다.
styles.js라는 파일을  만들어 useStyle을 정의하자. theme을 기본으로 써도되고, 직접 만든 theme을 넘겨받아도 좋다. 이때, 사용하고 싶은 className들을 다 여기에 저장해두면 된다.

# card를 만드는 일반적인 방법
먼저 Card, CardContent, CardActions, CardMedia를 import해준다.
그리고 Card안에 CardMedia, CardContent, CardActions순으로 넣어준다. 일반적으로. 그리고 CardMedia에는 이미지나 동영상을, CardContent에는 text 타이포그래피를, CardAction에는 버튼과 같은 사용할수 있는 UI를 넣어준다.

이 카드 컴포넌트는 하나만 사용하지 않고 여러개 나열하는 방식으로 사용하는 경우가 많다. 그래서 Grid안에 넣어서 사용하면 편하다. 
Grid container로 감싸고 (필요하면 spacing도하고) Grid item으로 각 Card들을 감싸서 레이아웃에 Card가 잘 들어갈 수 있게 한다. 그리고 그 카드별로 Card CardMedia CardContent CardItem순으로 내부를 구성시켜주면 끝이다.
내가 유투브를 보고 따라 만든 Card들과 그것들을 나열하는 코드를 아래에 기록해둘것이다.
        <Grid container spacing = {4}>
            <Grid item xs = {12} sm ={4}>
              <Card className={classes.card}>
                  <CardMedia className = {classes.cardMedia}title ="Image tite" image ="image link를 적으면 된다" />
                  <CardContent className = {classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is a mediar card. you can !!2eqdwafwadqw
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size = "small" color = "primary">View</Button>
                    <Button size = "small" color = "primary">Edit</Button>
                  </CardActions>
              </Card>
            </Grid>
        </Grid>
여기서 classes라는 것은 알다시피 이것을 렌더링할 함수의 return이전에 const classes = useStyles()로 미리 선언해둔다. 또한, 그 useStyles()함수안에는 classes.~~로 가져올 클래스이름에 대한 스타일 정의가 되어있어야한다.

# Grid의 가운데 정렬 justifyContent 등을 설정
Grid는 기본적으로 flex기반이다. 따라서 justifyContent나 justifyItems, alignItems, alignContent를 사용하여 정렬할 수가 있다.

# map함수를 사용해서 반복되는 코드를 줄이는 방법
반복되는 코드를 map함수를 통해서 간소화할 수 있다. 먼저 반복되는 것의 key값으로 넘겨줄 데이터를 정의하거나, fetch또는 미리 파일을 만들어서 정의해둔다. json형태나 배열형태가 좋다. 그리고 사용하고자 하는 컴포넌트안에서
return문안에서 map함수를 작성한다. 여기서 정의한 키값 데이터를 datas라고 하겠다. 
그러면 {datas.map((data)=>(
    ~~~~~반복되는 구문. 중간중간에 data로 필요한 부분만 꽂아넣기~!!!!!!!!!!!!!!
))}
이런식으로 구현하면 된다. 매우쉽다.

# breakPoint의 종류
1. xs : 대부분 모바일 기기
2. sm : 태블릿
3. md : 태블릿 컴퓨터
4. lg : 컴퓨터 티비
5. xl : 티비

# footer작성요령
footer는 footer 태그를 이용
h6글꼴을 footer title로, subtitle을 footer subtitle로 이용한다.
ex > <footer className = {classes.footer}> 
<Typography align = "center" variant = "h6">footer</Typography>
<Typography align = "center" variant = "subtitle1">subtitle</Typography>
</footer>

# Typography 유용한 속성
variant : 사용할 태그
align : 정렬 기준 Set the text-align on the component.
component : The component used for the root node. Either a string to use a HTML element or a component.
gutterBottom : margin bottom
paragraph : margin bottom

# justifyContent, alignItems
컨테이너로 취급되는 요소에 적용가능한 속성이다. 
justifyContent : flex로 하위에 나열되는 요소들을 가로축을 기준으로 좌우에 대한 정렬을 실시한다. 행과 열이 있다면 열이 한쪽으로 치우치거나 가운데 모이게만드는 속성이다
> 	flex-start (default)	>>  요소들을 컨테이너의 왼쪽으로 정렬	
>   flex-end	>>   요소들을 컨테이너의 우측으로 정렬	
>   center  >> 요소들을 컨테이너의 중앙으로 정렬	
>   space-between   >> 요소들 사이에 동일한 간격을 둡니다.	
>   space-around    >> 요소들 주위에 동일한 간격을 둡니다.	
>   space-evenly(FireFox Only)	>> 첫번째로 오는 정렬 대상 전에 두개 의 인접한 정렬 대상 사이의 간격과	마지막 정렬 대상 이후의 간격이 같도록 항목이 분산 됩니다.

alignItems : flex로 하위에 나열되는 요소들을 세로축을 기준으로 상하에 대한 정렬을 실시한다. 행과 열이 있다면 행이 한쪽으로 치우치거나 가운데 모이게 만드는 속성이다.
>   flex-start  >>  컨테이너의 최상단으로 정렬 합니다.
>   flex-end    >>    컨테이너의 최하단으로 정렬합니다.
>   center  >>    컨테이너의 세로 축의 중앙으로 정렬 합니다.
>   baseline    >>   컨테이너의 시작위치에 정렬 합니다.
>   stretch(default)    >>   컨테이너의 맞게  늘립니다.