<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [templateRegexClosure][1]
    -   [Parameters][2]
-   [templateRegex][3]
    -   [Parameters][4]

## templateRegexClosure

Type: [Function][5]

### Parameters

-   `replacement` **([String][6] \| [RegExp][7])** The regex or string that is inserted into the other regex

Returns **[RegExp][7]** 

## templateRegex

The templateRegex function

### Parameters

-   `regex` **([String][6] \| [RegExp][7])** Regex that another regex should be inserted into
-   `replaceChar` **[String][6]** Character that should be replaced (optional, default `'&'`)

Returns **[templateRegexClosure][8]** 

[1]: #templateregexclosure

[2]: #parameters

[3]: #templateregex

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[8]: #templateregexclosure
