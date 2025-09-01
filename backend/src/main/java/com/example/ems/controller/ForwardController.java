package com.example.ems.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

	// This will forward any non-API path back to Angular's index.html
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirect() {
		return "forward:/index.html";
	}
}
