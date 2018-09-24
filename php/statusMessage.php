<?php
require 'C:/wamp64/dbConfig.php';
$sendEmail= $_POST['dbMsgFrom'];
$msgId= $_POST['MesgId'];
//
//ESTABLISHING CONNECTION TO DATABASE
$db_handle = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, dbname);
//
			if (mysqli_connect_errno()) {
			    #printf("Connect failed: %s\n", mysqli_connect_error());
			    $statusResponse['servConnection']="Failure";//This means that no 'ServConnection2',no 'responseMesg'. In effect no further process is taken.
			    $retResponse = json_encode($statusResponse);
				echo($statusResponse);
			    #exit();
			}elseif ($db_handle) {
				#print "Connection to the Server established!".'<br>';
				$statusResponse['servConnection']="Success";
				$statusSQLquery = "SELECT *FROM ".dbMessage." WHERE (SenderEmailAddress='dyndayan7@gmail.comf')||(MsgTstamp='msgId')";
				$statusResult = mysqli_query($db_handle, $statusSQLquery);
							if ($statusResult) {
								
							while ($thResult=mysqli_fetch_assoc($statusResult)) {
								
								$statusResponse['responseMesg']=$thResult;
								echo(json_encode($statusResponse));
								}
							/* free result set */
				    		mysqli_free_result($statustResult);
							} else {
								$statusResponse['responseMesg']="Not Sure";
								echo (json_encode($statusResponse));
								
							}

			}
?>