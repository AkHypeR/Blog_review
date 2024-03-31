in the documentation
=====folder " conf " convert all the enviroment variable ('.env') into strings
======appwrite folder hold two file 
        1.auth.js=> where we include ....account creation,login,logut ,getcurrentUser functions,,we hold this function in the class cause it's easy to create a new account under the hood without reveling the fuction into our main frontend side 
        2.config.js=> where we deal with the the storage and database


=======store=>in the store we save the account data ,that user is login or logout 

=======App.jsx=> where we render the hedder and fotter file along with the outlet using router ,and here we check user login then show this other wise show this 