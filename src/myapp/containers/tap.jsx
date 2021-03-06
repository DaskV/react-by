import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AddTodot from './buttons'
import {addTodo} from './seraction'
import only from './mystyle/only.scss'
import styles from './mystyle/tow.scss'

class Todotaps extends Component{
	constructor(){
		super()
		this.state={
			cullr:0
		}
	}
	
	render(){
		return(
			<div>
				<div className={styles.ulsty}>
					<ul>
						{this.props.mytops.map((intodo,i)=>{
							return(
								<li onClick={this.taptallie.bind(this,i)} className={i==this.state.cullr?styles.toptaill:''} key={i}>{intodo.title}</li>
								)
						})}
					</ul>
				</div>
				<div className={styles.topbut}>
					<ul>
						{React.Children.map(this.props.children,(todotop,i)=>{
							return(
								<li key={i} className={[i==this.state.cullr?styles.denglunondes:styles.denglunonde].join(' ')}>
									{todotop}
								</li>
							)
						})}
					</ul>
				</div>
				<Qiantao></Qiantao>	
			</div>
			)
	}
	taptallie(i){
		this.setState({
			cullr:i
		})
	}
}

//嵌套路由处理

class Qiantao extends Component{
	render(){
		return(
			<div style={{background:'#ccc',height:'50px',textAlign:'center',lineHeight:'50px'}}>
				<div>
					<p><Link to='/qiantao'>我是嵌套路由显示的地方</Link></p>
				</div>
			</div>
			)
	}
}



class Taps extends Component{
	render(){
		return(
			<div>
				<Todotaps mytops={this.props.Visiters}>
					<div style={{background:'#4b3048'}}>第1页面</div>
					<div style={{background:'#56b765'}}>第2页面</div>
					<div style={{background:'#3e416e'}}>第3页面</div>
					<div style={{background:'#b2bf46'}}>第4页面</div>
					<div style={{background:'#c73f42'}}>第5页面</div>
				</Todotaps>
				<div>{this.props.children}</div>
			</div>
			)
	}
}

const select = (state)=>{ //redux数据处理
  return {
    Visiters:state.addcpp
  }
}

export default connect(select)(Taps)