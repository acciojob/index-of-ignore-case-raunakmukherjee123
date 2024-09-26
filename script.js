function indexOfIgnoreCase(s1, s2) {
  s1=s1.toUpperCase();
	s2=s2.toUpperCase();
	if(s1.indexOf(s2)>=0)
	{
		return s1.indexOf(s2);
	}
	else
	{
		return -1;
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
