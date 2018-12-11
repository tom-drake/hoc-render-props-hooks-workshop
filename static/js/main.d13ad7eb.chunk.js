(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(41),c=a.n(r),s=a(258),l=a(20),i=a(105),m=a.n(i),d=a(106),p=a.n(d),u=a(259),h=a(257),g=a(256),E=a(260),f=a(100),v=a.n(f),y=a(102),w=a.n(y),C=a(43),b=a.n(C),j=a(101),N=a.n(j),k=function(){return o.a.createElement("p",null,"Home")},O=a(37),x=a(7),T=a.n(x),R=a(22),D=a.n(R),B=a(14),H=a.n(B),P=a(21),S=a.n(P),W=a(3),L=a.n(W),A=a(23),U=a.n(A),M=a(24),I=a.n(M),J=a(48),q=a(31),z=a(32),F=a(35),V=a(33),G=a(36),K=a(50),Q=a.n(K),X=a(25),Y=a.n(X),Z=Y.a.CancelToken;function $(e){return function(t){var a=function(a){function n(){var e,t;Object(q.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(F.a)(this,(e=Object(V.a)(n)).call.apply(e,[this].concat(o)))).state={loading:!0},t}return Object(G.a)(n,a),Object(z.a)(n,[{key:"componentDidMount",value:function(){var t=this;Y.a.get(e,{cancelToken:new Z(function(e){t.cancelToken=e})}).then(function(e){var a=e.data;return t.setState({data:a,loading:!1})}).catch(function(e){Y.a.isCancel(e)||t.setState({error:e,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.cancelToken&&this.cancelToken()}},{key:"render",value:function(){var e=this.props,a=e.forwardedRef,n=Object(J.a)(e,["forwardedRef"]);return o.a.createElement(t,Object.assign({ref:a},n,this.state))}}]),n}(n.Component);return Q()(a,t),o.a.forwardRef(function(e,t){return o.a.createElement(a,Object.assign({},e,{forwardedRef:t}))})}}function _(){var e=$("https://jsonplaceholder.typicode.com/users/1")(function(e){var t=e.data;return e.loading?o.a.createElement(I.a,null):o.a.createElement(U.a,{src:{data:t}})});return o.a.createElement(e,null)}var ee=a(107);function te(e){var t=function(t){function a(){return Object(q.a)(this,a),Object(F.a)(this,Object(V.a)(a).apply(this,arguments))}return Object(G.a)(a,t),Object(z.a)(a,[{key:"render",value:function(){var t=this.props,a=t.data,n=t.loading,r=t.error,c=Object(J.a)(t,["data","loading","error"]);if(n)return o.a.createElement(I.a,null);if(r)throw r;return o.a.createElement(e,Object.assign({data:a},c))}}]),a}(n.Component);return Q()(t,e),o.a.forwardRef(function(e,a){return o.a.createElement(t,Object.assign({},e,{forwardedRef:a}))})}function ae(){var e=Object(ee.a)($("https://jsonplaceholder.typicode.com/users/1"),te)(function(e){var t=e.data;return o.a.createElement(U.a,{src:t})});return o.a.createElement(e,null)}var ne=Object(l.withStyles)({heading:{marginTop:10},content:{fontSize:20,maxWidth:1e3,marginBottom:20},divider:{marginTop:20,marginBottom:20},datademo:{padding:5,marginBottom:20}})(function(e){var t=e.classes,a=Object(n.useState)(!1),r=Object(O.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(!1),i=Object(O.a)(l,2),m=i[0],d=i[1];return o.a.createElement("div",{className:t.content},o.a.createElement(L.a,{className:t.heading,variant:"h2",gutterBottom:!0},"Higher Order Components"),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"What are they?"),o.a.createElement(L.a,{className:t.content,component:"p"},"A higher-order component (HOC) is an technique in React for reusing component logic. HOCs are not part of the React API they are a pattern. A HOC takes a Component as an argument and returns a generated Component with additional functionality on top of your own Component. It may provide this functionality to your Component via passing props down or it could choose to render something else based on what props were passed to it."),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},"const EnhancedComponent = higherOrderComponent(config)(WrappedComponent);"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},"const EnhancedComponent = higherOrderComponent(WrappedComponent);"),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"How are they made?"),o.a.createElement(L.a,{className:t.content,component:"p"},'A HoC can be made in a few ways. It can be a function which returns a function which returns a class (see below) if some kind of configuration is required before passing a Component in or it can just be a function which returns a class. That class returned should be a react Component with a render method returning the WrappedComponent with some new prop or a different component. Problems occur if static methods are used on the WrappedComponent as they will not be passed up through the HoC. Those static methods need to be hoisted up, the library "hoist-non-react-statics" will help with this. Another caveat is that refs won\'t be passed along to the wrapped component. This can be solved by forwarding the ref along using the "React.forwardRef" API.'),o.a.createElement(L.a,{variant:"h4"},"Data loader HoC"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport hoistNonReactStatic from "hoist-non-react-statics";\nimport axios from "axios";\n\nconst CancelToken = axios.CancelToken;\n\nexport default function withData(url) {\n  return function(WrappedComponent) {\n    class EnhancedComponent extends Component {\n      state = {\n        loading: true\n      };\n\n      componentDidMount() {\n        axios\n          .get(url, {\n            cancelToken: new CancelToken(c => {\n              this.cancelToken = c;\n            })\n          })\n          .then(({ data }) => this.setState({ data, loading: false }))\n          .catch(error => {\n            if (!axios.isCancel(error)) {\n              this.setState({ error, loading: false });\n            }\n          });\n      }\n\n      componentWillUnmount() {\n        if (this.cancelToken) this.cancelToken();\n      }\n\n      render() {\n        return <WrappedComponent {...this.props} {...this.state} />;\n      }\n    }\n\n    hoistNonReactStatic(EnhancedComponent, WrappedComponent);\n\n    return React.forwardRef((props, ref) => {\n      return <EnhancedComponent {...props} forwardedRef={ref} />;\n    });\n  };\n}'),o.a.createElement(L.a,{variant:"h4"},"HoC usage"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'const DataRender = ({ data, loading }) => {\n  if (loading) {\n    return <CircularProgress />;\n  }\n  return <ReactJson src={{ data }} />;\n};\n\nconst url = "https://jsonplaceholder.typicode.com/users/1";\nconst WrapperDataRender = withData(url)(DataRender);'),o.a.createElement(S.a,{className:t.datademo,elevation:1},o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return s(!0)}},"Mount"),o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return s(!1)}},"Unmount"),c&&o.a.createElement("div",null,o.a.createElement(_,null))),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Composing"),o.a.createElement(L.a,{className:t.content,component:"p"},"Let's say we want to use multiple HoCs on a single component we can do something like:"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'const DataRender = ({ data }) => {\n  return <ReactJson src={data} />;\n};\n\nconst LoadingDataRender = withLoading(DataRender);\n\nconst url = "https://jsonplaceholder.typicode.com/users/1";\nconst EnhancedComponent = withData(url)(LoadingDataRender);'),o.a.createElement(S.a,{className:t.datademo,elevation:1},o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return d(!0)}},"Mount"),o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return d(!1)}},"Unmount"),m&&o.a.createElement("div",null,o.a.createElement(ae,null))),o.a.createElement(L.a,{className:t.content,component:"p"},"This could get quite messy with many HoCs being used. We can use a library such as recompose to compose multiple HoCs together."),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'const DataRender = ({ data }) => {\n  return <ReactJson src={data} />;\n};\n\nconst url = "https://jsonplaceholder.typicode.com/users/1";\n\nconst EnhancedComponent = compose(\n  withData(url),\n  withLoading\n)(DataRender);'),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Pros?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"Code reuse."),o.a.createElement("li",null,"Can be used to seperate the data layer from visual layer (Redux is a good example)."),o.a.createElement("li",null,"Supports the single responsibility model."))),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Cons?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"Props can be overriden by the wrapper without you knowing"),o.a.createElement("li",null,"It's not always clear where props come from if looking at the component in isolation."),o.a.createElement("li",null,"Need to remeber to hoist the non react statics from the wrapped component"),o.a.createElement("li",null,"Any ref attached to the HoC will attach only to the HoC and not the wrapped component. Need to use the forwardRef API provided by react. https://reactjs.org/docs/forwarding-refs.html"))))}),oe=a(108),re=Y.a.CancelToken,ce=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(F.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0},a}return Object(G.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y.a.get(this.props.url,{cancelToken:new re(function(t){e.cancelToken=t})}).then(function(t){var a=t.data;return e.setState({data:a,loading:!1})}).catch(function(t){Y.a.isCancel(t)||e.setState({error:t,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.cancelToken&&this.cancelToken()}},{key:"render",value:function(){return this.props.children(Object(oe.a)({},this.state))}}]),t}(n.Component);function se(){return o.a.createElement(ce,{url:"https://jsonplaceholder.typicode.com/users/1"},function(e){var t=e.data;return e.loading?o.a.createElement(I.a,null):o.a.createElement(U.a,{src:{data:t}})})}var le=a(99),ie=Object(le.a)({users:o.a.createElement(ce,{url:"https://jsonplaceholder.typicode.com/users/1"}),todos:o.a.createElement(ce,{url:"https://jsonplaceholder.typicode.com/todos/1"})});function me(){return o.a.createElement(ie,null,function(e){var t=e.users,a=e.todos;return t.loading&&a.loading?o.a.createElement(I.a,null):o.a.createElement(U.a,{src:{users:t.data,todos:a.data}})})}var de=Object(l.withStyles)({heading:{marginTop:10},content:{fontSize:20,maxWidth:1e3,marginBottom:20},divider:{marginTop:20,marginBottom:20},datademo:{padding:5,marginBottom:20}})(function(e){var t=e.classes,a=Object(n.useState)(!1),r=Object(O.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(!1),i=Object(O.a)(l,2),m=i[0],d=i[1];return o.a.createElement("div",{className:t.content},o.a.createElement(L.a,{className:t.heading,variant:"h2",gutterBottom:!0},"Render Props"),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"What are they?"),o.a.createElement(L.a,{className:t.content,component:"p"},"A render props is function prop which is passed in to the component to tell it how to render rather than implementing its own logic."),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},"<DataProvider render={data => (\n  <h1>Hello {data.target}</h1>\n)}/>"),o.a.createElement(L.a,{className:t.content,component:"p"},"In this case its using render as the prop, however another common pattern is to use the children prop as a function instead."),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},"<DataProvider>\n  {data => (\n    <h1>Hello {data.target}</h1>\n  )}\n</DataProvider>"),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"How are they made?"),o.a.createElement(L.a,{className:t.content,component:"p"},"They are written like any other react component but instead of implementing their own way of rendering they basically defer this to the render prop."),o.a.createElement(L.a,{variant:"h4"},"Data loader Render Prop"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'import { Component } from "react";\nimport axios from "axios";\n\nconst CancelToken = axios.CancelToken;\n\nexport default class DataLoader extends Component {\n  state = {\n    loading: true\n  };\n\n  componentDidMount() {\n    axios\n      .get(this.props.url, {\n        cancelToken: new CancelToken(c => {\n          this.cancelToken = c;\n        })\n      })\n      .then(({ data }) => this.setState({ data, loading: false }))\n      .catch(error => {\n        if (!axios.isCancel(error)) {\n          this.setState({ error, loading: false });\n        }\n      });\n  }\n\n  componentWillUnmount() {\n    if (this.cancelToken) this.cancelToken();\n  }\n\n  render() {\n    return this.props.children({ ...this.state });\n  }\n}'),o.a.createElement(L.a,{variant:"h4"},"Render Prop usage"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'<DataLoader url="https://jsonplaceholder.typicode.com/users/1">\n  {({ data, loading }) => {\n    if (loading) {\n      return <CircularProgress />;\n    }\n    return <ReactJson src={{ data }} />;\n  }}\n</DataLoader>'),o.a.createElement(S.a,{className:t.datademo,elevation:1},o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return s(!0)}},"Mount"),o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return s(!1)}},"Unmount"),c&&o.a.createElement("div",null,o.a.createElement(se,null))),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Composing"),o.a.createElement(L.a,{className:t.content,component:"p"},"It's simple to compose them as they are just components."),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'<DataLoader url="https://jsonplaceholder.typicode.com/users/1">\n  {({ data: dataUsers, loading: loadingUsers }) => (\n    <DataLoader url="https://jsonplaceholder.typicode.com/todos/1">\n      {({ data: dataTodos, loading: loadingTodos }) => {\n        if (loadingUsers && loadingTodos) {\n          return <CircularProgress />;\n        }\n        return (\n          <ReactJson src={{ users: dataUsers, todos: dataTodos }} />\n        );\n      }}\n    </DataLoader>\n  )}\n</DataLoader>'),o.a.createElement(S.a,{className:t.datademo,elevation:1},o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return d(!0)}},"Mount"),o.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){return d(!1)}},"Unmount"),m&&o.a.createElement("div",null,o.a.createElement(me,null))),o.a.createElement(L.a,{className:t.content,component:"p"},"But wait, this is going to become messy quickly. Our actual component is hidden deep in these nested render functions. We can use a similar solution as we did with the HoCs. In this case we will use 'react-adopt'"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},'import { adopt } from "react-adopt";\n\nconst Composed = adopt({\n  users: <DataLoader url="https://jsonplaceholder.typicode.com/users/1" />,\n  todos: <DataLoader url="https://jsonplaceholder.typicode.com/todos/1" />\n});\n\nfunction MyComponent() {\n  return (\n    <Composed>\n      {({ users, todos }) => {\n        if (users.loading && todos.loading) {\n          return <CircularProgress />;\n        }\n        return <ReactJson src={{ users: users.data, todos: todos.data }} />;\n      }}\n    </Composed>\n  );\n}'),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Pros?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"The consumer is in full control of any props its component has"),o.a.createElement("li",null,"No magical props being passed to your component"))),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Cons?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"PureComponent is useless in most cases as the render prop is regenerated on each render. An instance method can be used and passed in as the render prop to solve this but it can split your code up a lot"))))}),pe=Object(l.withStyles)({heading:{marginTop:10},content:{fontSize:20,maxWidth:1e3,marginBottom:20},divider:{marginTop:20,marginBottom:20}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.content},o.a.createElement(L.a,{className:t.heading,variant:"h2",gutterBottom:!0},"Hooks"),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"What are they?"),o.a.createElement(L.a,{className:t.content,component:"p"},"hooks"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},""),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"How are they made?"),o.a.createElement(L.a,{className:t.content,component:"p"},"hooks"),o.a.createElement(L.a,{variant:"h4"},"Data loader Render Prop"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},""),o.a.createElement(L.a,{variant:"h4"},"Render Prop usage"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},""),o.a.createElement(S.a,{className:t.datademo,elevation:1}),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Composing"),o.a.createElement(L.a,{className:t.content,component:"p"},"compose"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},""),o.a.createElement(S.a,{className:t.datademo,elevation:1}),o.a.createElement(L.a,{className:t.content,component:"p"},"messy compose"),o.a.createElement(T.a,{component:"pre",className:"language-jsx"},""),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Pros?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"pro"))),o.a.createElement(H.a,{className:t.divider}),o.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"Cons?"),o.a.createElement(L.a,{className:t.content,component:"p"},o.a.createElement("ul",null,o.a.createElement("li",null,"con"))))}),ue="/hoc-render-props-hooks-workshop",he=Object(E.a)(function(e){e.classes;var t=e.location;return o.a.createElement(n.Fragment,null,o.a.createElement(v.a,{position:"static",color:"default"},o.a.createElement(N.a,{centered:!0,value:t.pathname},o.a.createElement(b.a,{label:"Home",value:"".concat(ue,"/"),component:g.a,to:"".concat(ue,"/")}),o.a.createElement(b.a,{label:"Higher Order Components",value:"".concat(ue,"/higher-order-components"),component:g.a,to:"".concat(ue,"/higher-order-components")}),o.a.createElement(b.a,{label:"Render Props",value:"".concat(ue,"/render-props"),component:g.a,to:"".concat(ue,"/render-props")}),o.a.createElement(b.a,{label:"Hooks",value:"".concat(ue,"/hooks"),component:g.a,to:"".concat(ue,"/hooks")}))),o.a.createElement(w.a,{container:!0,justify:"center"},o.a.createElement(u.a,null,o.a.createElement(h.a,{exact:!0,path:"".concat(ue,"/"),component:k}),o.a.createElement(h.a,{exact:!0,path:"".concat(ue,"/higher-order-components"),component:ne}),o.a.createElement(h.a,{exact:!0,path:"".concat(ue,"/render-props"),component:de}),o.a.createElement(h.a,{exact:!0,path:"".concat(ue,"/hooks"),component:pe}))))}),ge=Object(l.createMuiTheme)({palette:{primary:m.a},typography:{useNextVariants:!0}});c.a.render(o.a.createElement(s.a,null,o.a.createElement(l.MuiThemeProvider,{theme:ge},o.a.createElement(p.a,null),o.a.createElement(he,null))),document.getElementById("root"))}},[[109,2,1]]]);
//# sourceMappingURL=main.d13ad7eb.chunk.js.map