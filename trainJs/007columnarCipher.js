/*
Columnar Cipher
The columnar cipher is a transposition cipher that works like this.
Start with a secret message:
msg = "Meet me by the lake at midnight. Bring shovel."

Transform uppercase letters into lowercase and remove punctuation and spaces:
msg = "meetmebythelakeatmidnightbringshovel"

Then, pick a keyword made out of distinct letters:
keyword = "python"

Break up the message into chunks of the same length as the keyword, and write them in rows under the keyword. Then, number the columns based on the alphabetised order of the letters in the keyword:
p	y	t	h	o	n
m	e	e	t	m	e
b	y	t	h	e	l
a	k	e	a	t	m
i	d	n	i	g	h
t	b	r	i	n	g
s	h	o	v	e	l
4	6	5	1	3	2

Read off the enciphered message (ciphertext) from the columns, in the order specified by the numbers:
ciphertext = "thaiivelmhglmetgnembaitsetenroeykdbh"

If the message length is not a multiple of the keyword length, fill in each blank space with "x". For example:

msg = "Meet me at midnight."

keyword = "python"

p	y	t	h	o	n
m	e	e	t	m	e
a	t	m	i	d	n
i	g	h	t	x	x

Create a function that takes a string and a keyword. Return the ciphertext if the string is in plaintext (i.e. broken up into normal English words and punctuated), or the deciphered message if the string is in ciphertext. The resulting deciphered message will not have spaces.
Examples

cipher("Meet me by the lake at midnight. Bring shovel.", "python") ➞ "thaiivelmhglmetgnembaitsetenroeykdbh"

cipher("meeanbsleyamgioxebltirhxttkihnvxmhedtgex", "monty") ➞ "meetmebythelakeatmidnightbringshovelxxxx"

cipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake") ➞ "ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax"
*/

function cipher(msg, keyword) {
    const regex = /[.]|\s/g
    console.log(msg.toLowerCase().replace(regex, ''));
    
    let transform = msg.toLowerCase().replace(regex, '').split('')
    
    let key = keyword.split('')
    
    let orderWords = []
    orderWords.push(key)
    
    const compare = transform.length / orderWords[0].length;
    
    for (let index = 0; index < compare; index++) {
        // console.log(index, transform.length);
        
        let test = transform.splice(0, orderWords[0].length)
        // console.log(test);
        orderWords.push(test)
        while (orderWords[orderWords.length-1].length < orderWords[0].length) {
            orderWords[orderWords.length-1].push("x")
        }
    }
    // console.log(orderWords[orderWords.length-1]);
    console.log(orderWords);
    
}

// cipher("Meet me by the lake at midnight. Bring shovel.", "python")
// cipher("meeanbsleyamgioxebltirhxttkihnvxmhedtgex", "monty")
cipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake")

/*
c a k e
m i s s 
i o n d
e l t a 
k i l o 
s i e r 
r a h a
s b e e 
n c o m 
p r o m 
i s e d 
k i l l 
s t e v 
e e v a 
c u a t 
e
*/