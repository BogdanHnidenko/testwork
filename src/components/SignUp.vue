<template>
	<section class="registration">
		<div class="registration__block">
			<h2 class="registration__title">Sign Up</h2>
			<form class="registration__form form-registration" @submit.prevent="register">
				<div class="form-registration__name">
					<div class="form-registration__name_block">
						<input v-model="userFirstName" type="text" id="userFirstName" placeholder="First Name" />
						<input v-model="userLastName" type="text" id="userLastName" placeholder="Last Name" />
					</div>
					<div v-if="!isFirstNameValid && !isLastNameValid" class="form-registration__error">Incorrect name</div>
				</div>
				<div class="form-registration__email">
					<input v-model="email" type="email" id="email" placeholder="Email" />
					<div v-if="!isEmailValid" class="form-registration__error">Incorrect email</div>
				</div>
				<div class="form-registration__password">
					<input v-model="password" type="password" id="password" placeholder="Password" />
					<div v-if="!isPasswordValid" class="form-registration__error">Password must have at least 6
						characters
					</div>
				</div>
				<button class='form-registration__btn' type="submit">Sign Up</button>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SignUp',
	data() {
		return {
			userFirstName: '',
			userLastName: '',
			email: '',
			password: '',
			isFirstNameValid: true,
			isLastNameValid: true,
			isEmailValid: true,
			isPasswordValid: true,
		}
	},
	methods: {
		register() {
			if (this.validate()) {
				this.$emit('validate');
				this.$router.push('/home');
			}
		},
		validate() {
			this.isFirstNameValid = /^[A-Z][a-zA-Z]{2,}$/.test(this.userFirstName);
			this.isLastNameValid = /^[A-Z][a-zA-Z]{2,}$/.test(this.userLastName);
			this.isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email);
			this.isPasswordValid = this.password.length >= 6;
			return this.isFirstNameValid && this.isLastNameValid && this.isEmailValid && this.isPasswordValid;
		},
	},
}
</script>

<style>
.registration {
	min-height: 100vh;
	background: radial-gradient(circle, rgba(211, 238, 174, 1) 0%, rgba(148, 158, 233, 1) 100%);
	display: flex;
	align-items: center;
}

.registration__block {
	width: clamp(300px, 50%, 600px);
	margin-inline: auto;
	min-height: 400px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgb(255, 255, 255);
	box-shadow: 10px 20px 100px #000;
}

.registration__title {
	font-size: 30px;
	margin-bottom: 20px;
}

.registration__form {
	width: 100%;
}


.registration__form input {
	display: block;
	width: 100%;
	padding: 10px;
	border: none;
	border-bottom: 1px solid #000;
}

.registration__form input::placeholder {
	font-size: 12px;
}

.registration__form input:focus {
	border-bottom: 1px solid rgb(122, 211, 49);
}

.form-registration {
	display: flex;
	flex-direction: column;
	gap: 20px;
}


.form-registration__name_block {
	display: flex;
	gap: 20px;
}

.form-registration__error {
	text-align: center;
	margin-top: 10px;
}

.form-registration__btn {
	margin: 0 auto;
	width: 50%;
	font-size: 20px;
	color: #fff;
	padding: 20px;
	background: rgb(7, 104, 68);
	border-radius: 20px;
	transition: all 300ms;
}

.form-registration__btn:hover {
	background: rgb(5, 173, 112);
}
</style>