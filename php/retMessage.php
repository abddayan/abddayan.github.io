<?php 
require 'C:/wamp64/dbConfig.php';
#$db_db="designbit";
$db_handle = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, dbname);

#$dbTable="message";
$retSQLquery = "SELECT *FROM ".dbMessage." WHERE (SenderEmailAddress='dyndayan7@gmail.comf')||(MsgTstamp='2018-09-13 10:48:01.840574')";
//
$retResult = mysqli_query($db_handle, $retSQLquery);
			if ($retResult) {
				$retResponse['servConnection2']="Success";
				
			while ($thResult=mysqli_fetch_assoc($retResult)) {
				
				$retResponse['receivedMsg']=$thResult;
				echo(json_encode($retResponse));
				}
			/* free result set */
    		mysqli_free_result($retResult);
			} else {
				$retResponse['servConnection2']="Failure";
				$retResponse['receivedMsg']="Not Sure";
				echo (json_encode($retResponse));
				
			}

			/* close connection */
			mysqli_close($db_handle);
 ?>