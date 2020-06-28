package application.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Hello controller.
 */
@Controller
@RequestMapping("/api/hello")
public class HelloController {
    @GetMapping("/message")
    @ResponseBody
    public String getMessage(@RequestParam(required = false) String name) {
        return String.format("Hello, %s!",
                (name != null) ? name : "world");
    }
}
