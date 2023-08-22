package com.app.DTO;

import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignInRequest {

	@Email(message = "Invalid email format,please try again !!!")
	private String email;
	private String password;
}
